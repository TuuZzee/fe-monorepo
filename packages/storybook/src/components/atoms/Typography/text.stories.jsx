import React from 'react';

import { sizes, fonts } from './props';

import Text, { TextP1, TextP2, TextP3, TextP4, TextP5, TextP6, TextP7 } from '.';

export default {
  component: Text,
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: 'select' },
    },
    font: {
      options: Object.values(fonts),
      control: { type: 'select' },
    },
  },
};

const Template = function (args) {
  return <TextP1 {...args} />;
};

export const ParagraphP1 = Template.bind({});
ParagraphP1.args = {
  size: sizes.p1F15px,
  font: fonts.medium,
  children: 'P1 paragraph example',
};

export const ParagraphP2 = function (args) {
  return <TextP2 {...args} />;
};
ParagraphP2.args = {
  size: sizes.p2F15px,
  font: fonts.regular,
  children: 'P2 paragraph example',
};

export const ParagraphP3 = function (args) {
  return <TextP3 {...args} />;
};
ParagraphP3.args = {
  size: sizes.p3F13px,
  font: fonts.medium,
  children: 'P3 paragraph example',
};

export const ParagraphP4 = function (args) {
  return <TextP4 {...args} />;
};
ParagraphP4.args = {
  size: sizes.p4F13px,
  font: fonts.regular,
  children: 'P4 paragraph example',
};

export const ParagraphP5 = function (args) {
  return <TextP5 {...args} />;
};
ParagraphP5.args = {
  size: sizes.p5F11px,
  font: fonts.medium,
  children: 'P5 paragraph example',
};

export const ParagraphP6 = function (args) {
  return <TextP6 {...args} />;
};
ParagraphP6.args = {
  size: sizes.p6F11px,
  font: fonts.regular,
  children: 'P6 paragraph example',
};

export const ParagraphP7 = function (args) {
  return <TextP7 {...args} />;
};
ParagraphP7.args = {
  size: sizes.p7F11px,
  font: fonts.light,
  children: 'P7 paragraph example',
};
