import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

import { sizes, fonts } from './props';
import {
  TextWrapper,
  TitleWrapperH1,
  TitleWrapperH2,
  TitleWrapperH3,
  TitleWrapperH4,
  TitleWrapperH5,
  TitleWrapperH6,
} from './styled';

// Heading h1~h6
export const TitleH1 = function ({ children, color, fontWeight, ...props }) {
  return (
    <TitleWrapperH1 color={color} fontWeight={fontWeight} {...props}>
      {children}
    </TitleWrapperH1>
  );
};

TitleH1.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TitleH1.defaultProps = {
  size: sizes.h1F48px,
  fontWeight: fonts.medium,
  color: colors.grayH212528,
};

export const TitleH2 = function ({ children, color, fontWeight, ...props }) {
  return (
    <TitleWrapperH2 color={color} fontWeight={fontWeight} {...props}>
      {children}
    </TitleWrapperH2>
  );
};

TitleH2.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TitleH2.defaultProps = {
  size: sizes.h2F32px,
  fontWeight: fonts.bold,
  color: colors.grayH212528,
};

export const TitleH3 = function ({ children, color, fontWeight, ...props }) {
  return (
    <TitleWrapperH3 color={color} fontWeight={fontWeight} {...props}>
      {children}
    </TitleWrapperH3>
  );
};

TitleH3.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TitleH3.defaultProps = {
  size: sizes.h3F24px,
  fontWeight: fonts.bold,
  color: colors.grayH343A3E,
};

export const TitleH4 = function ({ children, color, fontWeight, ...props }) {
  return (
    <TitleWrapperH4 color={color} fontWeight={fontWeight} {...props}>
      {children}
    </TitleWrapperH4>
  );
};

TitleH4.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TitleH4.defaultProps = {
  size: sizes.h4F18px,
  fontWeight: fonts.medium,
  color: colors.grayH343A3E,
};

export const TitleH5 = function ({ children, color, fontWeight, ...props }) {
  return (
    <TitleWrapperH5 color={color} fontWeight={fontWeight} {...props}>
      {children}
    </TitleWrapperH5>
  );
};

TitleH5.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TitleH5.defaultProps = {
  size: sizes.h5F16px,
  fontWeight: fonts.medium,
  color: colors.grayH343A3E,
};

export const TitleH6 = function ({ children, color, fontWeight, ...props }) {
  return (
    <TitleWrapperH6 color={color} fontWeight={fontWeight} {...props}>
      {children}
    </TitleWrapperH6>
  );
};

TitleH6.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TitleH6.defaultProps = {
  size: sizes.h5F16px,
  fontWeight: fonts.regular,
  color: colors.grayH343A3E,
};

// Paragraph p
const Text = function ({ children, color, ...props }) {
  return (
    <TextWrapper aria-label="paragraph" color={color} {...props}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  size: sizes.p1F15px,
  fontWeight: '',
  color: colors.grayH495056,
};

export default Text;

export const TextP1 = function (props) {
  return <Text fontWeight={fonts.medium} size={sizes.p1F15px} {...props} />;
};

export const TextP2 = function (props) {
  return <Text fontWeight={fonts.regular} size={sizes.p2F15px} {...props} />;
};

export const TextP3 = function (props) {
  return <Text fontWeight={fonts.medium} size={sizes.p3F13px} {...props} />;
};

export const TextP4 = function (props) {
  return <Text fontWeight={fonts.regular} size={sizes.p4F13px} {...props} />;
};

export const TextP5 = function (props) {
  return <Text fontWeight={fonts.medium} size={sizes.p5F11px} {...props} />;
};

export const TextP6 = function (props) {
  return <Text fontWeight={fonts.regular} size={sizes.p6F11px} {...props} />;
};

export const TextP7 = function (props) {
  return <Text fontWeight={fonts.light} size={sizes.p7F11px} {...props} />;
};
