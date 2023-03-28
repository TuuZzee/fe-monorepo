import { createGlobalStyle } from 'styled-components';

import { sharedGlobalStyles } from '@namespace/web-shared/styles/sharedGlobalStyles';

export const GlobalStyles = createGlobalStyle`
  ${sharedGlobalStyles}

  header { z-index: 1; }

  body {
    background-color: ${({ theme }) => theme.colors.background.body};
    color: ${({ theme }) => theme.colors.text.title};
  }

  /*
  ** Nprogress
  */

  #nprogress .spinner-icon {
    display: none;
  }
`;

export const Unused = '';
