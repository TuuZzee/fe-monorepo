import React, { useContext } from 'react';

import { connect } from 'react-redux';

import LocaleAndToastrWrapper from '@namespace/web-shared/components/LocaleAndToastrWrapper';
import { LocaleContext } from '@namespace/web-shared/contexts/LocaleContext';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';

import Template from '../src/components/Template';
import wordingPage from '../src/locale/template';

const TemplatePage = function () {
  const { currentLocale } = useContext(LocaleContext);
  const intlMessages = flattenMessages(wordingPage[currentLocale]);

  return (
    <LocaleAndToastrWrapper wordingPage={intlMessages}>
      <Template />
    </LocaleAndToastrWrapper>
  );
};

export default connect()(TemplatePage);
