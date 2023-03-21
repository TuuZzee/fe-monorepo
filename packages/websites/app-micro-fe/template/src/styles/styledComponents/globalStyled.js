import { createGlobalStyle } from 'styled-components';

import { sharedGlobalStyles } from '@namespace/web-shared/styles/sharedGlobalStyles';
import { colors } from '@namespace/web-shared/styles/theme';

export const GlobalStyles = createGlobalStyle`
  ${sharedGlobalStyles}
  * { font-family: 'Spoqa Han Sans', sans-serif; }

  /*
  ** Scrollbars
  */
  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.background.body};
    width: 16px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background.body};
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.greyHbdbdbd};
    border-radius: 16px;
    border: 4px solid ${({ theme }) => theme.colors.background.body};
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }

  /*
  ** Nprogress
  */

  #nprogress .spinner-icon {
    border-top-color: ${colors.redHE01E3C};
    border-left-color: ${colors.redHE01E3C};
  }
`;

export const Unused = '';
