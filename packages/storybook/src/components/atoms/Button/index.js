import React from 'react';

import PropTypes from 'prop-types';

import defaultChildrenProps from '@namespace/web-shared/propTypes/common';
import { colors } from '@namespace/web-shared/styles/theme';

import LoaderIcon from '../LoaderIcon';

import { sizes, types } from './props';
import { ButtonWrapper, ButtonIcon } from './styled';

const Button = function (props) {
  const { bgColor, bgType, children, id, isDisabled, isLoading, ...otherProps } = props;

  if (isLoading) {
    return (
      <ButtonWrapper
        $bgColor={bgColor}
        $bgType={bgType}
        aria-busy="true"
        id={`${id}-button`}
        type="button"
        {...otherProps}
      >
        <LoaderIcon bgType={bgType} />
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper
      $bgColor={bgColor}
      $bgType={bgType}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      id={`${id}-button`}
      type="button"
      {...otherProps}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  bgType: PropTypes.oneOf(Object.values(types)),
  children: defaultChildrenProps,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(sizes)),
};

Button.defaultProps = {
  bgColor: `${colors.blueH27B4EB}`,
  bgType: types.primaryDefault,
  children: 'Button',
  id: '',
  isDisabled: false,
  isLoading: false,
  onClick: null,
  size: sizes.fullLarge,
};

export default Button;

export const ButtonWithIcon = function (props) {
  const { children, ...otherProps } = props;

  return (
    <Button size={sizes.large} {...otherProps}>
      <ButtonIcon />
      {children}
    </Button>
  );
};

ButtonWithIcon.propTypes = {
  children: defaultChildrenProps,
};

ButtonWithIcon.defaultProps = {
  children: 'Button',
};

export const LargeButton = function (props) {
  const { children, ...otherProps } = props;

  return (
    <Button size={sizes.large} {...otherProps}>
      {children}
    </Button>
  );
};

LargeButton.propTypes = {
  children: defaultChildrenProps,
};

LargeButton.defaultProps = {
  children: 'Large Button',
};

export const MediumButton = function (props) {
  const { children, ...otherProps } = props;
  return (
    <Button size={sizes.medium} {...otherProps}>
      {children}
    </Button>
  );
};

MediumButton.propTypes = {
  children: defaultChildrenProps,
};

MediumButton.defaultProps = {
  children: 'Medium Button',
};

export const PillLargeButton = function (props) {
  const { children, ...otherProps } = props;
  return (
    <Button size={sizes.pillLarge} {...otherProps}>
      {children}
    </Button>
  );
};

PillLargeButton.propTypes = {
  children: defaultChildrenProps,
};

PillLargeButton.defaultProps = {
  children: 'Pill Large Button',
};

export const PillMediumButton = function (props) {
  const { children, ...otherProps } = props;
  return (
    <Button size={sizes.pillMedium} {...otherProps}>
      {children}
    </Button>
  );
};

PillMediumButton.propTypes = {
  children: defaultChildrenProps,
};

PillMediumButton.defaultProps = {
  children: 'Pill Medium Button',
};

export const PillSmallButton = function (props) {
  const { children, ...otherProps } = props;
  return (
    <Button size={sizes.pillSmall} {...otherProps}>
      {children}
    </Button>
  );
};

PillSmallButton.propTypes = {
  children: defaultChildrenProps,
};

PillSmallButton.defaultProps = {
  children: 'Pill Small Button',
};

export const FullLargeButton = function (props) {
  const { children, ...otherProps } = props;
  return (
    <Button bgType={types.primaryFullDefault} size={sizes.fullLarge} {...otherProps}>
      {children}
    </Button>
  );
};

FullLargeButton.propTypes = {
  children: defaultChildrenProps,
};

FullLargeButton.defaultProps = {
  children: 'Full Large Button',
};

export const FullMediumButton = function (props) {
  const { children, ...otherProps } = props;
  return (
    <Button bgType={types.primaryFullDefault} size={sizes.fullMedium} {...otherProps}>
      {children}
    </Button>
  );
};

FullMediumButton.propTypes = {
  children: defaultChildrenProps,
};

FullMediumButton.defaultProps = {
  children: 'Full Medium Button',
};
