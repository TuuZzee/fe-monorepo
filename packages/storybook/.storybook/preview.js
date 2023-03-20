import React from 'react';
import reactIntlProps from '../src/utils/reactIntlProps.js';

import '../styles/globals.css';
import 'rsuite/dist/rsuite.min.css';

import GlobalStyles from '../styles/globalStyled';

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
};
