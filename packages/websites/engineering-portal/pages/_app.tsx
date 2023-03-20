import React, { FC } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';

import ErrorBoundary from '@namespace/web-shared/components/ErrorBoundary';
import MetasViewPorts from '@namespace/web-shared/components/MetasViewPorts';
import ThemeHandler from '@namespace/web-shared/components/ThemeHandler';
import LocaleContextProvider from '@namespace/web-shared/contexts/LocaleContext';
import ServiceContextProvider from '@namespace/web-shared/contexts/ServiceContext';
import UiUxContextProvider from '@namespace/web-shared/contexts/UiUxContext';

import service from '../service.config';
import { wrapper } from '../src/redux/store';
import darkTheme from '../src/styles/darkTheme';
import lightTheme from '../src/styles/lightTheme';
import { GlobalStyles } from '../src/styles/styledComponents/globalStyled';

import '../src/styles/globals.css';
import 'rsuite/dist/rsuite.min.css';
import '@namespace/web-shared/styles/index.scss';

// Top Progress bar
NProgress.configure();
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: FC = function ({ Component, pageProps }: AppProps) {
  // [Note]: we aren't using the @namespace/web-shared/nextJs/SharedApp at the moment since we wanna get rid of react-query
  return (
    <ServiceContextProvider
      description="Cloud Engineering Portal, for cloud team internal use"
      name={service.serviceName}
    >
      <ErrorBoundary errorLevel="application">
        <Head>
          <MetasViewPorts />
        </Head>
        <UiUxContextProvider>
          <ThemeHandler darkTheme={darkTheme} lightTheme={lightTheme}>
            <GlobalStyles />
            <LocaleContextProvider asPath="">
              <Component {...pageProps} />
            </LocaleContextProvider>
          </ThemeHandler>
        </UiUxContextProvider>
      </ErrorBoundary>
    </ServiceContextProvider>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default wrapper.withRedux(App);
