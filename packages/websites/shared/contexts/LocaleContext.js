import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { isEmpty } from 'lodash/fp';
import { Settings } from 'luxon';
import PropTypes from 'prop-types';

import service from '../service.config';
import { getNavigator } from '../utils/browserClient';
import { en, ko, supportedLocales } from '../utils/intl-i18n';
import localforage from '../utils/localforage';
import { errorLog } from '../utils/logger';

export const LocaleContext = createContext();

export const localeStorageId = 'locale';

const LocaleContextProvider = function ({ asPath, children }) {
  const [currentLocale, setCurrentLocale] = useState(en);

  const updateLocale = useCallback(async locale => {
    try {
      if (supportedLocales.includes(locale)) {
        setCurrentLocale(locale);
        // Persist locale setting to API/Back-end
      }
    } catch (error) {
      errorLog('LocaleContextProvider - updateLocale error', error, service.serviceName);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const setDefaultLocale = async () => {
      let locale = en;

      try {
        if (!isEmpty(asPath) && asPath.includes('lang=')) {
          locale = asPath.includes(`lang=${ko}`) ? ko : en;
        } else {
          const navigator = getNavigator();
          const navLanguage = navigator.language || navigator.userLanguage;
          const navLocale = navLanguage.slice(0, navLanguage.indexOf('-'));

          const storageLocale = await localforage.getItem(localeStorageId);

          if (storageLocale) {
            locale = storageLocale;
          } else if (navLocale) {
            locale = navLocale;
          }
        }
      } catch (error) {
        errorLog('LocaleContextProvider - setDefaultLocale error', error, service.serviceName);
      }

      if (locale !== currentLocale && supportedLocales.includes(locale)) {
        setCurrentLocale(locale);
      }
    };

    setDefaultLocale(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Settings.defaultLocale = currentLocale;
    localforage.setItem(localeStorageId, currentLocale);
  }, [currentLocale]);

  const value = useMemo(
    () => ({
      currentLocale,
      updateLocale,
    }),
    [currentLocale, updateLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

LocaleContextProvider.propTypes = {
  asPath: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LocaleContextProvider.defaultProps = { asPath: '', children: null };

export default LocaleContextProvider;
