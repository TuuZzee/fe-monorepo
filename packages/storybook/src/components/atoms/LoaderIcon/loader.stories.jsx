import React from 'react';

import { types } from '../Button/props';

import { sizes } from './props';

import LoaderIcon from '.';

export default {
  component: LoaderIcon,
  argTypes: {
    bgType: {
      options: Object.values(types),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(sizes),
      control: { type: 'select' },
    },
  },
};

const Template = function (args) {
  return <LoaderIcon {...args} />;
};

export const LoaderTemplate = Template.bind({});
LoaderTemplate.args = {
  bgType: types.primaryDefault,
  content: 'Loading...',
};
