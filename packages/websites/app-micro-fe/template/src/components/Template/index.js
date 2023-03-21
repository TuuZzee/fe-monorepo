import React from 'react';

import { useIntl } from 'react-intl';
import { connect } from 'react-redux';

import { TemplateTitle, TemplateWrapper } from './styled';
import Todo from './Todo';

const Template = function () {
  const intl = useIntl();

  return (
    <TemplateWrapper>
      <TemplateTitle>{intl.messages['template.title']}</TemplateTitle>
      <Todo />
    </TemplateWrapper>
  );
};

export default connect()(Template);
