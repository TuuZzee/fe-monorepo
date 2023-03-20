import React from 'react';

import { types } from '../../src/components/atoms/Button/props';
import Confirm from '../../src/components/molecules/Modal/Confirm';
import { sizes } from '../../src/components/molecules/Modal/propTypes';
import { projects, componentTypes } from '../titlePath';

export default {
  title: `${projects.template}/${componentTypes.molecule}/Modal`,
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
