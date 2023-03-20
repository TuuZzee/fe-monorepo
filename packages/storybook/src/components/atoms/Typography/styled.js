import styled, { css } from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import { sizes, fonts } from './props';

const handleFont = fontWeight => {
  switch (fontWeight) {
    case fonts.bold:
      return css`
        font-weight: 700;
      `;
    case fonts.medium:
      return css`
        font-weight: 500;
      `;
    case fonts.regular:
      return css`
        font-weight: 400;
      `;
    case fonts.light:
      return css`
        font-weight: 300;
      `;
    default:
      return css`
        font-weight: 400;
      `;
  }
};

const handleSize = size => {
  switch (size) {
    case sizes.h1F48px:
      return css`
        font-weight: 500;
        font-size: 48px;
        line-height: 64px;
        letter-spacing: -0.27px;
        color: ${colors.grayH212528};
      `;
    case sizes.h2F32px:
      return css`
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: ${colors.grayH343A3E};
      `;
    case sizes.h3F24px:
      return css`
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${colors.grayH343A3E};
      `;
    case sizes.h4F18px:
      return css`
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: ${colors.grayH343A3E};
      `;
    case sizes.h5F16px:
      return css`
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.grayH343A3E};
      `;
    case sizes.h6F16px:
      return css`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.grayH343A3E};
      `;
    case sizes.p1F15px:
      return css`
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: ${colors.grayH495056};
      `;
    case sizes.p2F15px:
      return css`
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: ${colors.grayH495056};
      `;
    case sizes.p3F13px:
      return css`
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        color: ${colors.grayH495056};
      `;
    case sizes.p4F13px:
      return css`
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: ${colors.grayH495056};
      `;
    case sizes.p5F11px:
      return css`
        font-weight: 500;
        font-size: 11px;
        line-height: 12px;
        color: ${colors.grayH495056};
      `;
    case sizes.p6F11px:
      return css`
        font-weight: 400;
        font-size: 11px;
        line-height: 12px;
        color: ${colors.grayH495056};
      `;
    case sizes.p7F11px:
      return css`
        font-weight: 300;
        font-size: 11px;
        line-height: 12px;
        color: ${colors.grayH495056};
      `;
    default:
      return css`
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.grayH343A3E};
      `;
  }
};

/* <h> tag wrappers */
export const TitleWrapperH1 = styled.h1`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const TitleWrapperH2 = styled.h2`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const TitleWrapperH3 = styled.h3`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const TitleWrapperH4 = styled.h4`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const TitleWrapperH5 = styled.h5`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const TitleWrapperH6 = styled.h6`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

/* <p> tag wrapper */
export const TextWrapper = styled.p`
  ${({ size }) => handleSize(size)}
  ${({ fontWeight }) => handleFont(fontWeight)}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
