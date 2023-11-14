import React from 'react';

import { sizes, types } from './props';

import Button, {
  ButtonWithIcon,
  LargeButton,
  MediumButton,
  PillLargeButton,
  PillMediumButton,
  PillSmallButton,
  FullLargeButton,
  FullMediumButton,
} from '.';

export default {
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    size: {
      options: Object.values(sizes),
      control: { type: 'select' },
    },
    bgType: {
      options: Object.values(types),
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

const Template = function (args) {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  bgType: types.primaryDefault,
  children: 'Primary',
  size: sizes.large,
};

export const PrimaryFull = Template.bind({});
PrimaryFull.args = {
  bgType: types.primaryFullDefault,
  children: 'Primary Full',
  size: sizes.fullLarge,
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgType: types.secondaryDefault,
  children: 'Secondary',
  size: sizes.large,
};

export const SecondaryFull = Template.bind({});
SecondaryFull.args = {
  bgType: types.secondaryFullDefault,
  children: 'Secondary Full',
  size: sizes.fullLarge,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  bgType: types.tertiaryDefault,
  children: 'Tertiary',
  size: sizes.large,
};

export const TertiaryFull = Template.bind({});
TertiaryFull.args = {
  bgType: types.tertiaryFullDefault,
  children: 'Tertiary Full',
  size: sizes.fullLarge,
};

export const ButtonWithIconTemplate = function (args) {
  return <ButtonWithIcon {...args} />;
};

export const LargeButtonTemplate = function (args) {
  return <LargeButton {...args} />;
};

export const MediumButtonTemplate = function (args) {
  return <MediumButton {...args} />;
};

export const PillLargeButtonTemplate = function (args) {
  return <PillLargeButton {...args} />;
};

export const PillMediumButtonTemplate = function (args) {
  return <PillMediumButton {...args} />;
};

export const PillSmallButtonTemplate = function (args) {
  return <PillSmallButton {...args} />;
};

export const FullLargeButtonTemplate = function (args) {
  return <FullLargeButton {...args} />;
};

export const FullMediumButtonTemplate = function (args) {
  return <FullMediumButton {...args} />;
};
