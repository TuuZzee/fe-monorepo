import { List as RsuiteList } from 'rsuite';
import styled from 'styled-components';

import { Input } from '@namespace/storybook/src/components/atoms';

export const TemplateTitle = styled.h3`
  font-size: 32px;
  line-height: 42px;

  color: ${({ theme }) => theme.colors.text.title};
  text-align: center;
`;

export const TemplateWrapper = styled.div`
  position: relative;

  form {
    width: 335px;
  }
`;

export const FormInput = styled(Input)`
  color: ${({ theme }) => theme.colors.text.inputText};

  p {
    color: ${({ theme }) => theme.colors.text.title};
  }
`;

export const List = styled(RsuiteList)`
  color: ${({ theme }) => theme.colors.text.inputText};
`;
