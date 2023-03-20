import { AutoComplete as RsuiteAutocomplite, InputGroup as RsuiteInputGroup } from 'rsuite';
import styled, { css } from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import CloseIcon from '../../Icons/CloseIcon';
import { InputWrapper } from '../../styledComponents';
import { TextP2 } from '../Typography';

export const IconRight = styled.div`
  display: ${props => (props.disabled || !props.$visible ? ' none' : ' flex')};
  z-index: 1;
  position: absolute;
  right: 16px;
`;

export const InputCloseIcon = styled(CloseIcon)`
  display: ${props => (props.$visible ? 'block' : 'none')};
  position: absolute;
  right: 16px;
  z-index: 1;
`;

export const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ full }) =>
    full
      ? css`
          width: 100%;
        `
      : css`
          height: 335px;
        `}
  position: relative;
`;

export const InputWrapperDiv = styled(InputWrapper)`
  border: 1px solid ${colors.grayHCDD3D8};
  background: ${colors.whiteHFFFFFF};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;

  width: 100%;

  &:hover {
    border: 1px solid ${colors.blueH27B4EB};
  }

  &:focus-within {
    border: 2px solid ${colors.blueH27B4EB};
  }

  ${props =>
    props.error &&
    css`
      border: 2px solid ${colors.redHE9343A};
    `};

  ${props =>
    props.disabled && {
      pointerEvents: 'none',
      color: `${colors.grayHACB4BB} !important`,
      border: `1px solid ${colors.grayHCDD3D8} !important`,
      background: `${colors.grayHF1F3F4} !important`,
    }}
`;

export const InputTag = styled.input`
  font-weight: 500;
  font-size: ${props =>
    props.type === 'password' && !props.isShown && props.value !== '' ? '30px' : '16px'};
  line-height: 24px;
  color: ${colors.grayH343A3E};
  width: ${props =>
    `calc(100% - 18px - ${props.iconLeft ? '36px' : '0px'} - ${props.iconRight ? '36px' : '0px'})`};
  padding-left: ${props => (props.iconLeft ? '36px' : '0px')};
  padding-right: ${props => (props.iconRight ? '36px' : '0px')};
  height: 24px;
  border: none;
  outline: none;
  position: absolute;
  left: 16px;

  &::placeholder {
    color: ${colors.grayHACB4BB};
  }

  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &:disabled {
    color: ${colors.grayHACB4BB};
  }

  ::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    position: absolute;
    right: 0;
  }

  ::-webkit-textfield-decoration-container {
    font-size: 16px;
  }
`;

export const IconLeft = styled.div`
  width: ${props => (props.disabled ? '16px' : '24px')};
  height: ${props => (props.disabled ? '16px' : '24px')};
  position: absolute;
  left: 16px;
  z-index: 1;
`;

export const TextWrapper = styled(TextP2)`
  min-height: 20px;
  margin-top: 12px;
  color: ${props => (props.error ? colors.redHE9343A : colors.grayHACB4BB)};
`;

export const InputGroup = styled(RsuiteInputGroup)`
  border: none;
  outline: none;
  box-shadow: none !important;
  width: 92% !important;
`;

export const AutoComplete = styled(RsuiteAutocomplite)`
  padding-left: 8px;
  padding-right: 2px;

  input {
    padding-right: 0;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.grayH343A3E};

    :focus {
      box-shadow: none;
    }
  }
`;
