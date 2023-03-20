import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import reactIntlProps from './reactIntlProps';

function render(ui, renderOptions = {}) {
  const Wrapper = function ({ children }) {
    return <IntlProvider {...reactIntlProps}>{children}</IntlProvider>;
  };

  Wrapper.propTypes = {
    children: PropTypes.node,
  };

  Wrapper.defaultProps = {
    children: null,
  };

  return rtlRender(ui, { wrapper: Wrapper, renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
