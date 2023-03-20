import { createGlobalStyle } from 'styled-components';

import { sharedGlobalStyles } from '@namespace/web-shared/styles/sharedGlobalStyles';

const GlobalStyles = createGlobalStyle`
  body {
    ${sharedGlobalStyles}
  }
`;

export default GlobalStyles;
