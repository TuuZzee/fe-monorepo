import React, { useContext } from 'react';

import { connect } from 'react-redux';

import Template from '@namespace/web-app-micro-fe-template/src/components/Template';
import wordingPage from '@namespace/web-app-micro-fe-template/src/locale/template';

import LocaleAndToastrWrapper from '@namespace/web-shared/components/LocaleAndToastrWrapper';
import { LocaleContext } from '@namespace/web-shared/contexts/LocaleContext';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';

import TopNavBar from '../src/components/shared/TopNavBar';

const TemplatePage = function () {
  const { currentLocale } = useContext(LocaleContext);
  const intlMessages = flattenMessages(wordingPage[currentLocale]);

  return (
    <LocaleAndToastrWrapper wordingPage={intlMessages}>
      <TopNavBar />
      <br />
      <Template />
    </LocaleAndToastrWrapper>
  );
};

export default connect()(TemplatePage);
