import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import mockMutationObserver from '@namespace/web-shared/jest/mock/mutationObserver';

import * as stories from './modal.stories';

const { ConfirmModalTemplate } = composeStories(stories);

mockMutationObserver();

describe('STBK.MODL Confirm Modal', () => {
  it('Renders Confirm modal', () => {
    render(<ConfirmModalTemplate />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(ConfirmModalTemplate.args.title)).toBeInTheDocument();
    expect(screen.getByText(ConfirmModalTemplate.args.description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'close-modal-icon' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });
});
