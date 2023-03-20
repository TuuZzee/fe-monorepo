import axios from 'axios';
import axiosRetry from 'axios-retry';
import { cloneDeep } from 'lodash/fp';
import qs from 'qs';
import { toastr } from 'react-redux-toastr';

import { localeStorageId } from '@namespace/web-shared/contexts/LocaleContext';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';
import localforage from '@namespace/web-shared/utils/localforage';
import { debugLog, errorLog } from '@namespace/web-shared/utils/logger';

import service from '../../service.config';
import localeErrorMsg from '../locale/errorMessages';

import constants from './constants';

import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const { API } = constants;
const timeout = parseInt(constants.API.timeout, 10);

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
      // const { config } = res;

      // Toastr message handing
      // if (config && !!config.toastrSuccessContent) {
      //   toastr.success(config.toastrSuccessContent);
      // } else if (config && !!config.toastrInfoContent) {
      //   toastr.success(config.toastrInfoContent);
      // }
    } catch (error) {
      errorLog(`requestAPI - intercept.req res: ${res} - error`, error, service.serviceName);
    }
    return res.data;
  },
  async error => {
    debugLog('requestAPI - intercept.res error', error, service.serviceName);
    const { response } = error;
    if (!response) return Promise.reject(error);
    const { config, data } = response;

    const locale = await localforage.getItem(localeStorageId);
    const errorMsgList = flattenMessages(localeErrorMsg[locale]);

    let errorMsg = errorMsgList['errorMsg.default'];
    try {
      if (response) {
        const { code } = data;

        if (code && errorMsgList[`errorMsg.${code}`]) {
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
    return Promise.reject(error);
  },
);

export default requestAPI;

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await requestAPI({ url: baseUrl + url, method, data, params, headers });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
