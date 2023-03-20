import styled, { keyframes, css } from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import { ColumnContainer } from '../../styledComponents';
import { types } from '../Button/props';

import { TextP2 } from '../Typography';

import { sizes } from './props';

export const LoaderOuterWrapper = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
`;

export const LoadingContent = styled(TextP2)`
  margin-top: 5px;
`;

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const handleSize = size => {
  switch (size) {
    case sizes.large:
      return css`
        width: 44px;
        height: 44px;
      `;
    case sizes.medium:
      return css`
        width: 34px;
        height: 34px;
      `;
    case sizes.small:
      return css`
        width: 24px;
        height: 24px;
      `;
    default:
      return css`
        width: 24px;
        height: 24px;
      `;
  }
};

export const loaderMain = {
  [types.primaryDefault]: colors.whiteH68CBF1,
  [types.primaryDestructive]: colors.redHF07175,
  [types.primaryCancel]: colors.grayHC5CBCF,
  [types.secondaryDefault]: colors.blueHBEE9F9,
  [types.secondaryDestructive]: colors.redHF9C2C4,
  [types.tertiaryDefault]: colors.blueHB9E4F6,
  [types.tertiaryDestructive]: colors.redHF4BFC0,
  [types.toastrDefault]: '#235062',
};

export const loaderSec = {
  [types.primaryDefault]: colors.whiteHFFFFFF,
  [types.primaryDestructive]: colors.whiteHFFFFFF,
  [types.primaryCancel]: colors.whiteHFFFFFF,
  [types.secondaryDefault]: colors.blueH27B4EB,
  [types.secondaryDestructive]: colors.redHE9343A,
  [types.tertiaryDefault]: colors.blueH27B4EB,
  [types.tertiaryDestructive]: colors.redHE9343A,
  [types.toastrDefault]: colors.blueH27B4EB,
};

const LoaderCircle = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: relative;
  border: ${props => `3px solid ${loaderMain[props.bgType]}`};
  border-left: ${props => `3px solid ${loaderSec[props.bgType]}`};
  animation: ${loader} 1.1s infinite linear;
  z-index: 999;
  ${({ size }) => handleSize(size)}
`;

export default LoaderCircle;
