import React from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';

import WebMicroFeSharedApp from '@namespace/web-app-micro-fe-shared/nextJs/pageApp';

import service from '../service.config';
import RoutingContextProvider from '../src/contexts/RoutingContext';

import wrapper from '../src/redux/store';
import 'rsuite/dist/rsuite.min.css';
import '@namespace/web-shared/styles/index.scss';

NProgress.configure();
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = function ({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <WebMicroFeSharedApp
      asPath={Router.router?.asPath}
      serviceDescription="Main Container Application, wrap all micro frontends services"
      serviceName={service.serviceName}
      store={store}
    >
      <RoutingContextProvider>
        <Component {...pageProps} {...props.pageProps} />
      </RoutingContextProvider>
    </WebMicroFeSharedApp>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
