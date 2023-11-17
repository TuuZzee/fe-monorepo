import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen, fireEvent } from '@testing-library/react';

import * as stories from './input.stories';

const { DefaultTemplate, PasswordInputTemplate, ErrorInputTemplate, InputWithLeftIconTemplate } =
  composeStories(stories);

describe('STBK.INPT Default Input', () => {
  test('Renders Default input', () => {
    render(<DefaultTemplate />);
    const input = screen.getByRole('textbox', { name: 'default-input' });
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('Empties input', () => {
    render(<DefaultTemplate />);
    const input = screen.getByRole('textbox', { name: 'default-input' });
    fireEvent.change(input, { target: { value: 'test' } });
    const emptyInputButton = screen.getByRole('button', { name: 'empty-input-icon' });
    expect(emptyInputButton).toBeInTheDocument();
    fireEvent.click(emptyInputButton);
    expect(input.value).toBe('');
  });

  test('Disables the input', async () => {
    render(<DefaultTemplate isDisabled />);
    const input = screen.getByRole('textbox', { name: 'default-input' });
    await expect(input).toBeDisabled();
  });

  test('Sets input to readOnly mode', async () => {
    render(<DefaultTemplate isReadOnly />);
    const input = screen.getByRole('textbox', { name: 'default-input' });
    await expect(input).toHaveAttribute('readonly');
  });
});

describe('STBK.INPT Input password', () => {
  test('Toggles show password', () => {
    render(<PasswordInputTemplate />);
    const input = screen.getByRole('textbox', { name: 'password-input' });
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
    const showPasswordToggle = screen.getByRole('button', { name: 'show-password-toggle' });
    expect(showPasswordToggle).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('password');
    expect(screen.getByLabelText('eye-icon')).toBeInTheDocument();
    fireEvent.click(showPasswordToggle);
    expect(input.getAttribute('type')).toBe('text');
    expect(screen.getByLabelText('eye-crossed-icon')).toBeInTheDocument();
  });
});

describe('STBK.INPT Error Input', () => {
  test('Renders Email input with Error message', () => {
    render(<ErrorInputTemplate />);
    const input = screen.getByRole('textbox', { name: 'email-input' });
    expect(input).toBeInTheDocument();
    expect(screen.getByText(ErrorInputTemplate.args.errorMessage)).toBeInTheDocument();
  });
});

describe('STBK.INPT Input with Icon', () => {
  test('Renders Input with Icon', () => {
    render(<InputWithLeftIconTemplate />);
    expect(screen.getByRole('textbox', { name: 'icon-input' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'rectangle-icon' })).toBeInTheDocument();
  });
});
