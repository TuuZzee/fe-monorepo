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
  [types.primaryDefault]: colors.blueHA1C6EA,
  [types.primaryDestructive]: colors.redHC20F0F,
  [types.primaryCancel]: colors.grayHCECECE,
  [types.secondaryDefault]: colors.blueHE6EEFC,
  [types.secondaryDestructive]: colors.redHFCF3F6,
  [types.tertiaryDefault]: colors.blueHE6EEFC,
  [types.tertiaryDestructive]: colors.redHFAD3D3,
  [types.toastrDefault]: colors.whiteHFFFFFF,
};

export const loaderSec = {
  [types.primaryDefault]: colors.whiteHFFFFFF,
  [types.primaryDestructive]: colors.whiteHFFFFFF,
  [types.primaryCancel]: colors.whiteHFFFFFF,
  [types.secondaryDefault]: colors.blueH4285F4,
  [types.secondaryDestructive]: colors.redHDB4437,
  [types.tertiaryDefault]: colors.blueH4285F4,
  [types.tertiaryDestructive]: colors.redHDB4437,
  [types.toastrDefault]: colors.blueH4285F4,
};

const LoaderCircle = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: relative;
  border: ${props => `3px solid ${loaderMain[props.$bgType]}`};
  border-left: ${props => `3px solid ${loaderSec[props.$bgType]}`};
  animation: ${loader} 1.1s infinite linear;
  z-index: 999;
  ${({ size }) => handleSize(size)}
`;

export default LoaderCircle;
