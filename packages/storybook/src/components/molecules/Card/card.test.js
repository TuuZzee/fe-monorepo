import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen, getByText } from '@testing-library/react';

import * as stories from './card.stories';

const { CardTemplate, CardWithTextTemplate } = composeStories(stories);

describe('STBK.CARD Card Template', () => {
  test('Renders Card', () => {
    render(<CardTemplate />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});

describe('STBK.CARD Card with text', () => {
  test('Renders card wrapper with text', () => {
    render(<CardWithTextTemplate />);
    const card = screen.getByRole('article');
    expect(getByText(card, CardWithTextTemplate.args.heading)).toBeInTheDocument();
    expect(getByText(card, CardWithTextTemplate.args.subHeading)).toBeInTheDocument();
    expect(getByText(card, CardWithTextTemplate.args.description)).toBeInTheDocument();
  });
});
