import { createGlobalStyle } from 'styled-components';

import { sharedGlobalStyles } from '@namespace/web-shared/styles/sharedGlobalStyles';

import { colors } from '@namespace/web-shared/styles/theme';

export const GlobalStyles = createGlobalStyle`
  ${sharedGlobalStyles}

  header { z-index: 1; }

  body {
    background-color: ${colors.grayHF8F9FA};
  }

  /*
  ** Nprogress
  */

  #nprogress .spinner-icon {
    display: none;
  }
`;

export const Unused = '';
