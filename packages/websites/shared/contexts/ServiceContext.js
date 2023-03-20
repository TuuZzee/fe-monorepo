import React, { createContext, useEffect, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

import { debugLog } from '../utils/logger';

export const ServiceContext = createContext();

// This Context Provider MUST be use to wrap the application (usually in _app.js files)
// Usefull for shared components to get global service context
const ServiceContextProvider = function ({ children, description, name }) {
  // [Note]: use for context application access, no need for state mutation
  // eslint-disable-next-line no-unused-vars
  const [contextServiceDetails, setContextServiceDetails] = useState({ name, description });
  const value = useMemo(() => ({ contextServiceDetails }), [contextServiceDetails]);

  useEffect(() => {
    debugLog('ServiceContextProvider - Running service', `${name}, ${description}`);
  }, [description, name]);

  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>;
};

ServiceContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ServiceContextProvider.defaultProps = { children: null };

export default ServiceContextProvider;
