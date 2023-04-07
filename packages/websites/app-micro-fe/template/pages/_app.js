import React from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import darkTheme from '@namespace/web-app-micro-fe-shared/styles/darkTheme';
import lightTheme from '@namespace/web-app-micro-fe-shared/styles/lightTheme';
import SharedApp from '@namespace/web-shared/nextJs/SharedApp';

import service from '@/service';

import { GlobalStyles } from '@/styles/styledComponents/globalStyled';

import wrapper from '../src/redux/store';

import 'rsuite/dist/rsuite.min.css';
import '@namespace/web-shared/styles/index.scss';

// Top Progress bar
NProgress.configure();
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = function ({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <SharedApp
      darkTheme={darkTheme}
      errorLevel="application"
      lightTheme={lightTheme}
      serviceDescription="Template Application, example of micro-service"
      serviceName={service.serviceName}
    >
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} {...props.pageProps} />
      </Provider>
    </SharedApp>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
