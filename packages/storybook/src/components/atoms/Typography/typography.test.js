import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as textStories from '../../../../stories/atoms/typography/text.stories';
import * as titleStories from '../../../../stories/atoms/typography/title.stories';

import { sizes, fonts } from './props';

const { HeadingH1 } = composeStories(titleStories);
const { ParagraphP1 } = composeStories(textStories);

describe('STBK.TYPO Heading', () => {
  test('Renders Heading', () => {
    render(<HeadingH1 />);
    expect(screen.getByRole('heading')).toHaveTextContent(HeadingH1.args.children);
  });

  test('Sets size prop to the heading', () => {
    render(<HeadingH1 size={sizes.h6F16px} />);
    expect(screen.getByRole('heading')).toHaveStyle('font-size: 16px');
  });
});

describe('STBK.TYPO Paragraph', () => {
  test('Renders Paragraph', () => {
    render(<ParagraphP1 />);
    expect(screen.getByText(ParagraphP1.args.children)).toBeInTheDocument();
  });

  test('Sets font prop to the paragraph', () => {
    render(<ParagraphP1 font={fonts.medium} />);
    expect(screen.getByText(ParagraphP1.args.children)).toHaveStyle('font-weight: 500');
  });
});
