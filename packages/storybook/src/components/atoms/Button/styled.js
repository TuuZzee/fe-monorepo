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
        background: ${colors.blueH4285F4};

        &:hover {
          background: ${colors.blueH569AF8};
        }

        &:active {
          background: ${colors.blueH3081F1};
        }

        &:disabled {
          background: ${colors.blueH88B5F5};
        }
      `;
    case types.primaryDestructive:
      return css`
        background: ${colors.redHDB4437};

        &:hover {
          background: ${colors.redHD32B2B};
        }

        &:active {
          background: ${colors.redHC20F0F};
        }

        &:disabled {
          background: ${colors.redHF59797};
        }
      `;
    case types.primaryCancel:
      return css`
        background: ${colors.grayH999999};

        &:hover {
          background: ${colors.grayH878787};
        }

        &:active {
          background: ${colors.grayH6E6C6C};
        }

        &:disabled {
          background: ${colors.grayHD0D0D1};
        }
      `;
    case types.primaryFullDefault:
      return css`
        background: ${colors.blueH4285F4};
        border-radius: 0;

        &:hover {
          background: ${colors.blueH569AF8};
        }

        &:active {
          background: ${colors.blueH1F77F3};
        }

        &:disabled {
          background: ${colors.blueH88B5F5};
        }
      `;
    case types.primaryFullDestructive:
      return css`
        background: ${colors.redHDB4437};
        border-radius: 0;

        &:hover {
          background: ${colors.redHD32B2B};
        }

        &:active {
          background: ${colors.redHC20F0F};
        }

        &:disabled {
          background: ${colors.redHF59797};
        }
      `;
    case types.secondaryDefault:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.blueH4285F4};
        border: 1px solid ${colors.blueH4285F4};

        &:hover {
          background: ${colors.blueHE6EEFC};
          color: ${colors.blueH4285F4};
        }

        &:active {
          background: ${colors.blueHD7E5FC};
          color: ${colors.blueH1F77F3};
        }

        &:disabled {
          background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0%) 100%),
            ${colors.whiteHFFFFFF};
          color: ${colors.blueHD7E5FC};
          border: 1px solid ${colors.blueHD7E5FC};
        }
      `;
    case types.secondaryDestructive:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.redHDB4437};
        border: 1px solid ${colors.redHDB4437};

        &:hover {
          background: ${colors.redHFCF3F6};
        }

        &:active {
          background: ${colors.redHFAD3D3};
          color: ${colors.redHC20F0F};
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
        color: ${colors.blueH4285F4};
        border-radius: 0;

        &:hover {
          background: ${colors.blueHE6EEFC};
        }

        &:active {
          background: ${colors.blueHD7E5FC};
          color: ${colors.blueH1F77F3};
        }

        &:disabled {
          background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0%) 100%),
            ${colors.whiteHFFFFFF};
          color: ${colors.blueHD7E5FC};
        }
      `;
    case types.secondaryFullDestructive:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.redHDB4437};
        border-radius: 0;

        &:hover {
          background: ${colors.redHFCF3F6};
        }

        &:active {
          background: ${colors.redHFAD3D3};
          color: ${colors.redHC20F0F};
        }

        &:disabled {
          background: ${colors.whiteHFFFFFF};
        }
      `;
    case types.tertiaryDefault:
      return css`
        background: transparent;
        color: ${colors.blueH4285F4};

        &:hover {
          background: ${colors.blueHE6EEFC};
        }

        &:active {
          background: ${colors.blueHD7E5FC};
        }

        &:disabled {
          color: ${colors.blueHE6EEFC};

          &:hover {
            background: none;
          }
        }
      `;
    case types.tertiaryDestructive:
      return css`
        background: transparent;
        color: ${colors.redHDB4437};

        &:hover {
          background: ${colors.redHFCF3F6};
        }

        &:active {
          background: ${colors.redHFAD3D3};
          color: ${colors.redHC20F0F};
        }

        &:disabled {
          color: ${colors.redHF59797};

          &:hover {
            background: none;
          }
        }
      `;
    case types.tertiaryFullDefault:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.blueH4285F4};
        border-radius: 0;

        &:hover {
          background: ${colors.blueHE6EEFC};
        }

        &:active {
          background: ${colors.blueHD7E5FC};
        }

        &:disabled {
          background: ${colors.whiteHFFFFFF};
          color: ${colors.blueHE6EEFC};
        }
      `;
    case types.tertiaryFullDestructive:
      return css`
        background: ${colors.whiteHFFFFFF};
        color: ${colors.redHDB4437};
        border-radius: 0;

        &:hover {
          background: ${colors.redHFCF3F6};
        }

        &:active {
          background: ${colors.redHFAD3D3};
          color: ${colors.redHC20F0F};
        }

        &:disabled {
          color: ${colors.redHF59797};
          background: ${colors.whiteHFFFFFF};
        }
      `;
    default:
      return css`
        background: ${props => props.$bgColor || colors.blueH4285F4};
      `;
  }
};

export const ButtonWrapper = styled.button`
  padding: 0;
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
    background: ${colors.blueH4285F4};
  }

  ${({ size }) => handleSize(size)}
  ${({ $bgType }) => handleBgColor($bgType)}
`;
