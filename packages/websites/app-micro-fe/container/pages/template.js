import React, { useContext } from 'react';

import { mergeAll } from 'lodash/fp';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import wordingSharedCommon from '@namespace/web-app-micro-fe-shared/locale/common';
import wordingErrMsgCommon from '@namespace/web-app-micro-fe-shared/locale/errorMessages';
import { addTodo, removeTodo } from '@namespace/web-app-micro-fe-shared/redux/modules/todosShared';

import Template from '@namespace/web-app-micro-fe-template/src/components/Template';
import wordingPage from '@namespace/web-app-micro-fe-template/src/locale/template';

import LocaleAndToastrWrapper from '@namespace/web-shared/components/LocaleAndToastrWrapper';
import { LocaleContext } from '@namespace/web-shared/contexts/LocaleContext';
import { flattenMessages } from '@namespace/web-shared/utils/intl-i18n';

import FormItemListSection from '../src/components/FormItemListSection';
import TopNavBar from '../src/components/shared/TopNavBar';

const TemplatePage = function ({ todosShared }) {
  const { currentLocale } = useContext(LocaleContext);

  const intlMessages = flattenMessages(
    mergeAll([wordingSharedCommon, wordingErrMsgCommon, wordingPage])[currentLocale],
  );

  return (
    <LocaleAndToastrWrapper wordingPage={intlMessages}>
      <TopNavBar />
      <br />
      <Template />
      <br />
      <FormItemListSection
        addItem={addTodo}
        itemType="shared-todo"
        items={todosShared}
        removeItem={removeTodo}
        titleKey="sharedTodos.title"
      />
    </LocaleAndToastrWrapper>
  );
};

TemplatePage.propTypes = {
  todosShared: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(({ todosShared }) => ({ todosShared }))(TemplatePage);
