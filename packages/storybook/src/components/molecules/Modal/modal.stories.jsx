import React from 'react';

import { types } from '../../atoms/Button/props';

import Confirm from './Confirm';
import { sizes } from './propTypes';

export default {
  component: Confirm,
  argTypes: {
    cancelButtonType: {
      options: Object.values(types),
      control: { type: 'select' },
    },
    submitButtonType: {
      options: Object.values(types),
      control: { type: 'select' },
    },
    size: {
      description: 'Default sizes: xs:max-width 400px, sm:480px, md:640px, lg:800px, full',
      options: Object.values(sizes),
      control: { type: 'select' },
    },
  },
};

const Template = function (args) {
  return <Confirm {...args} />;
};

export const ConfirmModalTemplate = Template.bind({});
ConfirmModalTemplate.args = {
  title: 'This is Title',
  description: 'This is Description',
  imageSrc: '',
  showCloseIcon: true,
  open: true,
  size: sizes.sm480px,
  onClose: () => {},
  onSubmit: () => {},
};
