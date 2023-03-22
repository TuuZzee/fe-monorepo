import styled from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

export const ToastActionWrapper = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  margin-top: 8px;
`;

export const SeeDetailsLink = styled.a`
  color: ${colors.blueH27B4EB};
  text-decoration: none;
  margin-right: 16px;

  :hover {
    text-decoration: underline;
  }
`;

export const CloseButton = styled.span`
  cursor: pointer;
  color: ${colors.grayHACB4BB};
`;
