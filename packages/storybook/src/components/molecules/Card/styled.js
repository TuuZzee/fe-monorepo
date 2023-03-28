import styled from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import { ColumnContainer } from '../../styledComponents';

export const CardWrapper = styled.article`
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border: 1px solid ${colors.grayHCECECE};
  border-radius: 16px;
  background-color: ${colors.whiteHFFFFFF};
  padding: 32px;
`;

export const CardColumnContainer = styled(ColumnContainer)`
  > :not(:last-child) {
    margin-bottom: 16px;
  }

  align-items: center;
`;
