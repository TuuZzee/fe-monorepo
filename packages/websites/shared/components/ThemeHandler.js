import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { light, supportedUIthemes, UiUxContext } from '../contexts/UiUxContext';

const ThemeHandler = function ({ children, darkTheme, lightTheme }) {
  const { uiTheme } = useContext(UiUxContext);

  const [theme, setTheme] = useState(light);

  useEffect(() => {
    if (supportedUIthemes.includes(uiTheme)) setTheme(uiTheme);
  }, [uiTheme]);

  return <ThemeProvider theme={theme === light ? lightTheme : darkTheme}>{children}</ThemeProvider>;
};

ThemeHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  darkTheme: PropTypes.shape({}),
  lightTheme: PropTypes.shape({}),
};

ThemeHandler.defaultProps = {
  children: null,
  darkTheme: {},
  lightTheme: {},
};

export default ThemeHandler;
