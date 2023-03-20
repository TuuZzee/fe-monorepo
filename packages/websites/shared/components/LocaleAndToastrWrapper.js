import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import ReduxToastr from 'react-redux-toastr';

import { LocaleContext } from '../contexts/LocaleContext';

import ErrorBoundary from './ErrorBoundary';

const LocaleAndToastrWrapper = function ({ children, wordingPage }) {
  const { currentLocale } = useContext(LocaleContext);

  return (
    <IntlProvider
      defaultLocale={currentLocale}
      key={currentLocale}
      locale={currentLocale}
      messages={wordingPage}
    >
      <ReduxToastr
        preventDuplicates
        position="top-center"
        transitionIn="bounceInDown"
        transitionOut="bounceOutUp"
        closeOnToastrClick
        progressBar
      />
      <ErrorBoundary errorLevel="layout">{children}</ErrorBoundary>
    </IntlProvider>
  );
};

LocaleAndToastrWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  query: PropTypes.shape({ lang: PropTypes.string }),
  wordingPage: PropTypes.shape({}).isRequired,
};

LocaleAndToastrWrapper.defaultProps = {
  children: null,
  query: { lang: '' },
};

export default LocaleAndToastrWrapper;
