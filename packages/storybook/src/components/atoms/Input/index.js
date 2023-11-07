import React, { useCallback, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

import EyeCrossedIcon from '../../Icons/EyeCrossedIcon';
import EyeIcon from '../../Icons/EyeIcon';

import { LabelWrapper } from '../../styledComponents';

import types from './props';

import {
  InputFormWrapper,
  InputWrapperDiv,
  TextWrapper,
  InputTag,
  IconLeft,
  IconRight,
  InputCloseIcon,
} from './styled';

const Input = function ({
  children,
  errorMessage,
  full,
  helperText,
  iconLeft,
  id,
  value,
  isDisabled,
  isInput,
  isReadOnly,
  label,
  name,
  onBlur,
  onChange,
  parentRef,
  placeholder,
  showEmptyInputButton,
  type,
  ...props
}) {
  const [isShown, setShown] = useState(false);
  const error = useMemo(() => !!errorMessage, [errorMessage]);

  const handleOnChange = e => {
    if (isReadOnly) return;
    if (onChange) onChange(e.target.value);
  };

  const handleClick = useCallback(() => {
    if (type === types.password) {
      setShown(!isShown);
    } else if (onChange) onChange('');
  }, [isShown, onChange, type]);

  const handelClickForFocus = () => {
    parentRef?.current?.focus();
  };

  return (
    <InputFormWrapper $full={full} onClick={handelClickForFocus} {...props}>
      {label ? <LabelWrapper htmlFor={name}>{label}</LabelWrapper> : ''}
      <InputWrapperDiv $hasError={error} disabled={isDisabled}>
        {iconLeft && <IconLeft disabled={isDisabled}>{iconLeft}</IconLeft>}
        {isInput && (
          <InputTag
            {...props}
            $iconLeft={!!iconLeft}
            $isShown={isShown}
            aria-disabled={isDisabled}
            aria-label={`${name}-input`}
            className=""
            disabled={isDisabled}
            id={`${name}-input`}
            name={name}
            onBlur={e => onBlur && onBlur(e.target.value)}
            onChange={handleOnChange}
            placeholder={isDisabled ? '' : placeholder}
            readOnly={isReadOnly}
            ref={parentRef}
            role="textbox"
            type={isShown ? types.text : type}
            value={value}
            $iconRight={
              type === types.password ||
              (type !== types.password && showEmptyInputButton && !isReadOnly && !isDisabled)
            }
          />
        )}
        {children}
        {type === types.password && (
          <IconRight
            $visible={!!value}
            aria-disabled={isDisabled}
            aria-label="show-password-toggle"
            disabled={isDisabled}
            onClick={handleClick}
            role="button"
          >
            {isShown ? <EyeCrossedIcon /> : <EyeIcon />}
          </IconRight>
        )}
        {type !== types.password && showEmptyInputButton && !isReadOnly && !isDisabled && (
          <InputCloseIcon
            $visible={!!value}
            aria-label="empty-input-icon"
            onClick={handleClick}
            role="button"
          />
        )}
      </InputWrapperDiv>
      {errorMessage && (
        <TextWrapper $hasError={error} aria-label="input-error-message">
          {errorMessage}
        </TextWrapper>
      )}
      {helperText && <TextWrapper aria-label="input-helper-message">{helperText}</TextWrapper>}
    </InputFormWrapper>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  full: PropTypes.bool,
  helperText: PropTypes.string,
  iconLeft: PropTypes.node,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDisabled: PropTypes.bool,
  isInput: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  parentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  placeholder: PropTypes.string,
  showEmptyInputButton: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(types)),
};

Input.defaultProps = {
  children: null,
  errorMessage: '',
  full: true,
  helperText: '',
  iconLeft: null,
  id: '',
  value: '',
  isDisabled: false,
  isInput: true,
  isReadOnly: false,
  label: null,
  name: '',
  onBlur: null,
  onChange: null,
  parentRef: null,
  placeholder: '',
  showEmptyInputButton: true,
  type: types.text,
};

export default Input;
