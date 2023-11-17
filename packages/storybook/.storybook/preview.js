import React from 'react';

import reactIntlProps from '../src/utils/reactIntlProps.js';
import GlobalStyles from '../styles/globalStyled';

import '../styles/globals.css';
import 'rsuite/dist/rsuite.min.css';

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  reactIntl: reactIntlProps,
  locale: reactIntlProps.defaultLocale,
  locales: {
    en: 'English',
    ko: 'Korean',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'black',
  },
};
