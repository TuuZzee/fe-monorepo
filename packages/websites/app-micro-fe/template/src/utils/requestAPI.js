import axios from 'axios';
import axiosRetry from 'axios-retry';
import { cloneDeep } from 'lodash/fp';
import qs from 'qs';
import { toastr } from 'react-redux-toastr';

import { localeStorageId } from '@namespace/web-shared/contexts/LocaleContext';
import Emitter from '@namespace/web-shared/utils/emitter';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';
import localforage from '@namespace/web-shared/utils/localforage';
import { debugLog, errorLog } from '@namespace/web-shared/utils/logger';

import localeErrorMsg from '@/locale/errorMessages';
import service from '@/service';

import constants from './constants';

export const authenticationFailed = 'authentication_fail';
export const clientTokenStorageId = 'clientTokens';

const { API } = constants;
const timeout = parseInt(constants.API.timeout, 10);

const setClientTokenData = async tokens => {
  await localforage.setItem(clientTokenStorageId, JSON.stringify({ ...tokens }));
};

const getClientTokens = async () => {
  const localStorageTokens = await localforage.getItem(clientTokenStorageId);

  return JSON.parse(localStorageTokens);
};

const clearSession = async () => {
  await localforage.removeItem(clientTokenStorageId);
};

const requestAPI = axios.create({
  baseURL: `${API.host}/`,
  headers: { 'Content-Type': 'application/json' },
  timeout,
  paramsSerializer: {
    serialize: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  },
});

axiosRetry(requestAPI, { retryDelay: axiosRetry.exponentialDelay });

// Request interceptor
requestAPI.interceptors.request.use(
  async config => {
    try {
      debugLog('requestAPI - intercept.req sent config', config, service.serviceName);
      const configReq = cloneDeep(config);
      configReq.headers['Accept-Language'] = await localforage.getItem(localeStorageId);

      // Authenticated request add the accessToken in the header
      if (configReq.useAuth) {
        const { accessToken } = await getClientTokens();
        configReq.headers.Authorization = `Bearer ${accessToken}`;
      }
      return configReq;
    } catch (error) {
      errorLog(`requestAPI - intercept.req config: ${config} - error`, error, service.serviceName);
      return config;
    }
  },
  error => {
    errorLog('requestAPI - interceptors.req error', error, service.serviceName);
    return Promise.reject(error);
  },
);

// Response interceptor
requestAPI.interceptors.response.use(
  async res => {
    try {
      debugLog('requestAPI - intercept.res sent res', res, service.serviceName);
      const { config, data } = res;

      // Example of implementation for handling access tokens in various processes:
      // Sign-In / Refresh credentials
      if (['/sign-in', '/refresh'].includes(config.url)) {
        const { accessToken } = data.data;

        await setClientTokenData({ accessToken });
      }
      // Sign-Out
      if (config.url === '/sign-out') {
        clearSession();
      }

      // Toastr message handing
      if (config && !!config.toastrSuccessContent) {
        toastr.success(config.toastrSuccessContent);
      } else if (config && !!config.toastrInfoContent) {
        toastr.success(config.toastrInfoContent);
      }
    } catch (error) {
      errorLog(`requestAPI - intercept.req res: ${res} - error`, error, service.serviceName);
    }
    return res.data;
  },
  async error => {
    debugLog('requestAPI - intercept.res error', error, service.serviceName);
    const { response } = error;
    const { config, data } = response;

    const locale = await localforage.getItem(localeStorageId);
    const errorMsgList = flattenMessages(localeErrorMsg[locale]);

    let errorMsg = errorMsgList['errorMsg.default'];
    try {
      if (response) {
        const { code } = data;

        if (code && code === authenticationFailed) {
          Emitter.emit(authenticationFailed);
          clearSession();
        } else if (code && errorMsgList[`errorMsg.${code}`]) {
          errorMsg = errorMsgList[`errorMsg.${code}`];
        }
      }

      // Toastr message handing
      if (config && config.useToastrError && errorMsg) {
        toastr.error(errorMsg);
      }
    } catch (e) {
      errorLog(`requestAPI - intercept.res error: ${error} - e`, e, service.serviceName);
    }
    // [Note]: Reject with custom object to handle the error in higher catch
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ status: response ? response.status : 400, data, errorMsg });
  },
);

export default requestAPI;
