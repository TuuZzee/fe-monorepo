import styled from 'styled-components';

import { Input } from '@namespace/storybook/src/components/atoms';

export const SectionTitle = styled.h3`
  margin-bottom: 25px;
  font-size: 32px;
  line-height: 42px;

  color: ${({ theme }) => theme.colors.text.title};
  text-align: center;
`;

export const SectionWrapper = styled.div`
  position: relative;

  form {
    width: 335px;
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.inputText};
`;

export const FormInput = styled(Input)`
  color: ${({ theme }) => theme.colors.text.inputText};

  p {
    color: ${({ theme }) => theme.colors.text.title};
  }
`;
