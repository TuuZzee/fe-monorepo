import React from 'react';

import { useIntl } from 'react-intl';
import { connect } from 'react-redux';

import { TemplateTitle, TemplateWrapper } from './styled';
import Todos from './Todos';

const Template = function () {
  const intl = useIntl();

  return (
    <TemplateWrapper>
      <TemplateTitle>{intl.messages['template.title']}</TemplateTitle>
      <Todos />
    </TemplateWrapper>
  );
};

export default connect()(Template);
