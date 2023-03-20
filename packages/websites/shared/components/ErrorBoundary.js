// Build from https://reactjs.org/docs/error-boundaries.html for granular FE error tracking
import React from 'react';

import PropTypes from 'prop-types';

import { ServiceContext } from '../contexts/ServiceContext';
import { errorLog } from '../utils/logger';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    const { errorLevel } = this.props;
    const { contextServiceDetails } = this.context;

    errorLog('ErrorBoundary - error level', errorLevel, contextServiceDetails.name || '');
    // componentDidCatch(error, errorInfo) {[...]}
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // [ToDo]: change for custom ServerError Component
      return null;
    }

    return children;
  }
}

ErrorBoundary.contextType = ServiceContext;

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  errorLevel: PropTypes.string.isRequired,
};

ErrorBoundary.defaultProps = { children: null };

export default ErrorBoundary;
