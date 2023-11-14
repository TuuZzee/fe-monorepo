import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './button.stories';

const { Primary, SecondaryFull, ButtonWithIconTemplate, PillSmallButtonTemplate } =
  composeStories(stories);

describe('STBK.BTTN Default Button', () => {
  test('Renders Primary button', () => {
    render(<Primary />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });

  test('Disables the button', async () => {
    render(<Primary isDisabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  });

  test('Sets isLoading prop to the button', () => {
    render(<Primary isLoading />);
    expect(screen.getByRole('img', { name: 'loader-icon' })).toBeInTheDocument();
  });
});

describe('STBK.BTTN SecondaryFull Button', () => {
  test('Renders SecondaryFull button', () => {
    render(<SecondaryFull />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Full')).toBeInTheDocument();
  });

  test('Disables the button', async () => {
    render(<SecondaryFull isDisabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  });

  test('Sets isLoading prop to the button', () => {
    render(<SecondaryFull isLoading />);
    expect(screen.getByRole('img', { name: 'loader-icon' })).toBeInTheDocument();
  });
});

describe('STBK.BTTN Button with Icon', () => {
  test('Renders the button', () => {
    render(<ButtonWithIconTemplate />);
    expect(screen.getByRole('img', { name: 'rectangle-icon' })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('Disables the button', async () => {
    render(<ButtonWithIconTemplate isDisabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  });

  test('Sets isLoading prop to the button', () => {
    render(<ButtonWithIconTemplate isLoading />);
    expect(screen.getByRole('img', { name: 'loader-icon' })).toBeInTheDocument();
  });
});

describe('STBK.BTTN Pill shape Small Button', () => {
  test('Renders PillSmallButtonTemplate button', () => {
    render(<PillSmallButtonTemplate />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Pill Small Button')).toBeInTheDocument();
  });

  test('Disables the button', async () => {
    render(<PillSmallButtonTemplate isDisabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  });

  test('Sets isLoading prop to the button', () => {
    render(<PillSmallButtonTemplate isLoading />);
    expect(screen.getByRole('img', { name: 'loader-icon' })).toBeInTheDocument();
  });
});
