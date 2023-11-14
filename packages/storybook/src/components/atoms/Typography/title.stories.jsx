import React from 'react';

import { sizes, fonts } from './props';

import { TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6 } from '.';

export default {
  component: TitleH1,
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
  return <TitleH1 {...args} />;
};

export const HeadingH1 = Template.bind({});
HeadingH1.args = {
  size: sizes.h1F48px,
  font: fonts.medium,
  children: 'H1 heading example',
};

export const HeadingH2 = function (args) {
  return <TitleH2 {...args} />;
};
HeadingH2.args = {
  size: sizes.h2F32px,
  font: fonts.bold,
  children: 'H2 heading example',
};

export const HeadingH3 = function (args) {
  return <TitleH3 {...args} />;
};
HeadingH3.args = {
  size: sizes.h3F24px,
  font: fonts.bold,
  children: 'H3 heading example',
};

export const HeadingH4 = function (args) {
  return <TitleH4 {...args} />;
};
HeadingH4.args = {
  size: sizes.h4F18px,
  font: fonts.medium,
  children: 'H4 heading example',
};

export const HeadingH5 = function (args) {
  return <TitleH5 {...args} />;
};
HeadingH5.args = {
  size: sizes.h5F16px,
  font: fonts.medium,
  children: 'H5 heading example',
};

export const HeadingH6 = function (args) {
  return <TitleH6 {...args} />;
};
HeadingH6.args = {
  size: sizes.h6F16px,
  font: fonts.regular,
  children: 'H6 heading example',
};
