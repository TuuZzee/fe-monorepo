import React, { useContext, FC, ReactNode } from 'react';

import { mergeAll } from 'lodash/fp';

import LocaleAndToastrWrapper from '@namespace/web-shared/components/LocaleAndToastrWrapper';
import { LocaleContext } from '@namespace/web-shared/contexts/LocaleContext';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';

import wordingCommon from '../../locale/common';
import wordingErrors from '../../locale/errorMessages';
import { LocaleContext as LocaleContextType } from '../../types/LocaleContext';

interface LayoutProps {
  wordingPage: Record<string, Record<string, Record<string, string>>>;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = function ({ children, wordingPage }) {
  const { currentLocale } = useContext<LocaleContextType>(LocaleContext);

  const intlMessages = flattenMessages(
    mergeAll([wordingCommon, wordingPage, wordingErrors])[currentLocale],
  );

  return <LocaleAndToastrWrapper wordingPage={intlMessages}>{children}</LocaleAndToastrWrapper>;
};

export default Layout;
