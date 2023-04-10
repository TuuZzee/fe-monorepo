import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import EnvironmentBadge from '../components/EnvironmentBadge';
import ErrorBoundary from '../components/ErrorBoundary';
import MetasViewPorts from '../components/MetasViewPorts';
import ThemeHandler from '../components/ThemeHandler';
import LocaleContextProvider from '../contexts/LocaleContext';
import ServiceContextProvider from '../contexts/ServiceContext';
import UiUxContextProvider from '../contexts/UiUxContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const SharedApp = function ({
  asPath,
  children,
  darkTheme,
  errorLevel,
  lightTheme,
  serviceDescription,
  serviceName,
}) {
  return (
    <ServiceContextProvider description={serviceDescription} name={serviceName}>
      <ErrorBoundary errorLevel={errorLevel}>
        <Head>
          <MetasViewPorts />
        </Head>
        <QueryClientProvider client={queryClient}>
          <UiUxContextProvider>
            <ThemeHandler darkTheme={darkTheme} lightTheme={lightTheme}>
              <LocaleContextProvider asPath={asPath}>{children}</LocaleContextProvider>
              <EnvironmentBadge />
            </ThemeHandler>
          </UiUxContextProvider>
          {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
            <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
          )}
        </QueryClientProvider>
      </ErrorBoundary>
    </ServiceContextProvider>
  );
};

SharedApp.propTypes = {
  asPath: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node])
    .isRequired,
  darkTheme: PropTypes.shape({}),
  errorLevel: PropTypes.string.isRequired,
  lightTheme: PropTypes.shape({}),
  serviceDescription: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
};

SharedApp.defaultProps = {
  asPath: '',
  darkTheme: {},
  lightTheme: {},
};

export default SharedApp;
