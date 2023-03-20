import React, { FC } from 'react';

import { useIntl } from 'react-intl';

import { TemplateWrapper } from './styled';
import Todos from './Todos';

const Template: FC = function () {
  const intl = useIntl();

  return (
    <TemplateWrapper>
      <h1 className="text-3xl font-bold underline">
        {intl.formatMessage({ id: 'template.title' })}
      </h1>
      <Todos />
    </TemplateWrapper>
  );
};

export default Template;
