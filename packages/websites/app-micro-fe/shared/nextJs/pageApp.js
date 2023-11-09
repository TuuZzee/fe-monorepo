import React from 'react';

import { Roboto } from 'next/font/google';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import SharedApp from '@namespace/web-shared/nextJs/SharedApp';

import darkTheme from '../styles/darkTheme';
import lightTheme from '../styles/lightTheme';
import { GlobalStyles } from '../styles/styledComponents/globalStyled';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

const WebMicroFeSharedApp = function ({
  asPath,
  children,
  serviceDescription,
  serviceName,
  store,
}) {
  return (
    <SharedApp
      asPath={asPath}
      darkTheme={darkTheme}
      errorLevel="application"
      lightTheme={lightTheme}
      serviceDescription={serviceDescription}
      serviceName={serviceName}
    >
      <Provider store={store}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style global jsx>{`
          body,
          * {
            font-family: ${roboto.style.fontFamily}, Lato, Arial, sans-serif;
          }
        `}</style>
        <GlobalStyles />
        {children}
      </Provider>
    </SharedApp>
  );
};

WebMicroFeSharedApp.propTypes = {
  asPath: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node])
    .isRequired,
  serviceDescription: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  store: PropTypes.shape({}).isRequired,
};

WebMicroFeSharedApp.defaultProps = { asPath: '' };

export default WebMicroFeSharedApp;
