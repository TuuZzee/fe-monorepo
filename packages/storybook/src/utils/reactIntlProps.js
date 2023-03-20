// import en from 'path_to_web_app';
// import ko from 'path_to_web_app';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';

const locales = ['en', 'ko'];
// const localeFiles = { en, ko };
const localeFiles = { en: {}, ko: {} };

const messages = locales.reduce(
  (acc, lang) => ({
    ...acc,
    [lang]: flattenMessages(localeFiles[lang]),
  }),
  {},
);

const formats = {}; // optional, if you have any formats

const reactIntlProps = {
  defaultLocale: 'en',
  locales,
  messages,
  formats,
};

export default reactIntlProps;
