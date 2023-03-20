import styled from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import { TextP1 } from './atoms/Typography';

export const LabelWrapper = styled(TextP1)`
  color: ${colors.grayH495056};
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 4px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlignCenterRowContainer = styled(RowContainer)`
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarginTop32px = styled.div`
  margin-top: 32px;
`;

export const MarginTop10px = styled.div`
  margin-top: 10px;
`;

// Basic container wrappers
export const OuterWrapper = styled(ColumnContainer)`
  top: 0;
  left: 0;
  justify-content: center;
  align-items: flex-start;
  margin: 64px;
  position: relative;
`;

export const InnerWrapper = styled(ColumnContainer)`
  width: ${props => props.initialWidth || '1024px'};
  margin: ${props => props.initialMargin || 'auto'};
`;

export const HeaderWrapper = styled(RowContainer)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;
