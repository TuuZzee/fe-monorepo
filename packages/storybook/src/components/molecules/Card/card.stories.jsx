import React from 'react';

import Card, { CardWithText } from '.';

export default {
  component: Card,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};

const Template = function (args) {
  return <Card {...args} />;
};

export const CardTemplate = Template.bind({});

const WithTextTemplate = function (args) {
  return <CardWithText {...args} />;
};

export const CardWithTextTemplate = WithTextTemplate.bind({});
CardWithTextTemplate.args = {
  heading: 'Heading',
  subHeading: 'SubHeading',
  description: 'Description',
};
