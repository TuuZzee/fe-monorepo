import React from 'react';

import types from './props';
import { AutocompleteInput, InputWithLeftIcon, InputDefault } from './storybookExamples';

export default {
  component: InputDefault,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    type: {
      options: Object.values(types),
      control: { type: 'select' },
    },
  },
};

const Template = function (args) {
  return <InputDefault {...args} />;
};

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  placeholder: 'Placeholder',
  type: types.text,
  full: true,
  name: 'default',
};

export const PasswordInputTemplate = Template.bind({});
PasswordInputTemplate.args = {
  label: 'Password',
  placeholder: 'Password',
  type: types.password,
  helperText: 'Enter your password',
  name: 'password',
};

export const ErrorInputTemplate = Template.bind({});
ErrorInputTemplate.args = {
  label: 'Email',
  placeholder: 'Email',
  type: types.email,
  errorMessage: 'Please enter a valid email address',
  name: 'email',
};

const WithLeftIconTemplate = function (args) {
  return <InputWithLeftIcon {...args} />;
};

export const InputWithLeftIconTemplate = WithLeftIconTemplate.bind({});
InputWithLeftIconTemplate.args = {
  placeholder: 'Placeholder',
  type: types.text,
  full: true,
  name: 'icon',
};

export const AutocompleteInputExample = function (args) {
  return <AutocompleteInput {...args} />;
};
