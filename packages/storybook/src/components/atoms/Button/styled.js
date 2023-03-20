import styled, { css } from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import RectangleIcon from '../../Icons/RectangleIcon';

import { sizes, types } from './props';

export const ButtonIcon = styled(RectangleIcon)`
  margin-right: 10px;
`;

export const handleSize = size => {
  switch (size) {
    case sizes.large:
      return css`
        min-width: 335px;
        min-height: 52px;
        padding: 14px 16px;
        font-size: 18px;
        line-height: 24px;

        ${ButtonIcon} {
          width: 20px;
          height: 20px;
        }
      `;
    case sizes.medium:
      return css`
        min-width: 335px;
        min-height: 44px;
        padding: 10px 16px;
        font-size: 16px;
        line-height: 24px;
      `;
    case sizes.pillSmall:
      return css`
        min-width: 109px;
        min-height: 36px;
        padding: 8px 16px;
        font-size: 15px;
        line-height: 20px;
      `;
    case sizes.fullLarge:
      return css`
        width: 100%;
        min-height: 52px;
        padding: 14px 16px;
        font-size: 18px;
        line-height: 24px;
      `;
    case sizes.fullMedium:
      return css`
        width: 100%;
        min-height: 40px;
        padding: 8px 16px;
        font-size: 16px;
        line-height: 24px;
      `;
    case sizes.pillLarge:
      return css`
        min-width: 141px;
        min-height: 52px;
        padding: 14px 24px;
        font-size: 18px;
        line-height: 24px;
      `;
    case sizes.pillMedium:
      return css`
        min-width: 115px;
        min-height: 44px;
        padding: 10px 16px;
        font-size: 16px;
        line-height: 24px;
      `;
    default:
      return css`
        width: 335px;
        height: 52px;
        padding: 14px 16px;
        font-size: 18px;
      `;
  }
};

const handleBgColor = bgType => {
  switch (bgType) {
    case types.primaryDefault:
      return css`
        background: ${colors.blueH27B4EB};

        &:hover {
          background: ${colors.blueH0BBFF7};
        }

        &:active {
          background: ${colors.blueH0099DA};
        }

        &:disabled {
          background: ${colors.blueH92DAF4};
        }
      `;
    case types.primaryDestructive:
      return css`
        background: ${colors.redHE9343A};

        &:hover {
          background: ${colors.redHD72A34};
        }

        &:active {
          background: ${colors.redHCA222D};
        }

        &:disabled {
          background: ${colors.redHE9343A};
        }
      `;
    case types.primaryCancel:
      return css`
        background: ${colors.grayHACB4BB};

        &:hover {
          background: ${colors.grayH868D94};
        }

        &:active {
          background: ${colors.grayH868D94};
        }

        &:disabled {
          background: ${colors.grayHACB4BB};
        }
      `;
    case types.primaryFullDefault:
      return css`
        background: ${colors.blueH27B4EB};
        border-radius: 0;

        &:hover {
          background: ${colors.blueH0BBFF7};
        }

        &:active {
          background: ${colors.blueH0099DA};
        }

        &:disabled {
          background: ${colors.blueH92DAF4};
        }
      `;
    case types.primaryFullDestructive:
      return css`
        background: ${colors.redHE9343A};
        border-radius: 0;

        &:hover {
          background: ${colors.redHD72A34};
        }

        &:active {
          background: ${colors.redHCA222D};
        }

        &:disabled {
          background: ${colors.redHE9343A};
        }
      `;
    case types.secondaryDefault:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.blueH27B4EB};
        border: 1px solid ${colors.blueH27B4EB};

        &:hover {
          background: ${colors.blueHF6FCFE};
          color: ${colors.blueH0BBFF7};
        }

        &:active {
          background: ${colors.blueHE5F6FD};
          color: ${colors.blueH0099DA};
        }

        &:disabled {
          background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0%) 100%),
            ${colors.whiteHFFFFFF};
          color: ${colors.blueH92DAF4};
          border: 1px solid ${colors.blueH92DAF4};
        }
      `;
    case types.secondaryDestructive:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.redHE9343A};
        border: 1px solid ${colors.redHE9343A};

        &:hover {
          background: ${colors.redHFEF7F7};
        }

        &:active {
          background: ${colors.redHFCE7E7};
        }

        &:disabled {
          background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0%) 100%),
            ${colors.whiteHFFFFFF};
          color: ${colors.redHF09A9D};
          border: 1px solid ${colors.redHF09A9D};
        }
      `;
    case types.secondaryFullDefault:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.blueH27B4EB};
        border-radius: 0;

        &:hover {
          background: ${colors.blueHF4FBFE};
        }

        &:active {
          background: ${colors.blueHE9F7FD};
        }

        &:disabled {
          background: ${colors.whiteHFFFFFF};
          color: ${colors.blueH92DAF4};
        }
      `;
    case types.secondaryFullDestructive:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.redHE9343A};
        border-radius: 0;

        &:hover {
          background: ${colors.redHFEF7F7};
        }

        &:active {
          background: ${colors.redHFCE7E7};
        }

        &:disabled {
          background: ${colors.whiteHFFFFFF};
        }
      `;
    case types.tertiaryDefault:
      return css`
        background: transparent;
        color: ${colors.blueH27B4EB};

        &:hover {
          background: ${colors.blueHF6FCFE};
        }

        &:active {
          background: ${colors.blueHE5F6FD};
        }

        &:disabled {
          color: ${colors.blueH92DAF4};
        }
      `;
    case types.tertiaryDestructive:
      return css`
        background: transparent;
        color: ${colors.redHE9343A};

        &:hover {
          background: ${colors.redHFEF7F7};
        }

        &:active {
          background: ${colors.redHFCE7E7};
        }

        &:disabled {
          color: ${colors.redHF09A9D};
        }
      `;
    case types.tertiaryFullDefault:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.blueH27B4EB};
        border-radius: 0;

        &:hover {
          background: ${colors.blueHF4FBFE};
        }

        &:active {
          background: ${colors.blueHE9F7FD};
        }

        &:disabled {
          background: ${colors.whiteHFFFFFF};
          color: ${colors.blueH92DAF4};
        }
      `;
    case types.tertiaryFullDestructive:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.redHE9343A};
        border-radius: 0;

        &:hover {
          background: ${colors.redHFEF7F7};
        }

        &:active {
          background: ${colors.redHFCE7E7};
        }

        &:disabled {
          background: ${colors.whiteHFFFFFF};
        }
      `;
    default:
      return css`
        background: ${props => props.bgColor || colors.blueH27B4EB};
      `;
  }
};

export const ButtonWrapper = styled.button`
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 24px;
  border: none;
  color: ${colors.whiteHFFFFFF};
  border-radius: 4px;

  &:hover {
    background: ${colors.blueH0BBFF7};
  }

  ${({ size }) => handleSize(size)}
  ${({ bgType }) => handleBgColor(bgType)}
`;
