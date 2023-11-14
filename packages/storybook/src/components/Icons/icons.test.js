import React from 'react';

import { render, screen } from '@testing-library/react';

import CloseIcon from './CloseIcon';
import CloseModalIcon from './CloseModalIcon';
import EyeCrossedIcon from './EyeCrossedIcon';
import EyeIcon from './EyeIcon';
import RectangleIcon from './RectangleIcon';
import SearchIcon from './SearchIcon';

const testComponent = (component, name, ariaLabel, defaultProps) => {
  test(`Renders mounted component ${name}`, () => {
    render(component);
    expect(screen.getByRole('img', { name: ariaLabel })).toBeInTheDocument();
  });

  test(`Check styles of ${name}`, async () => {
    render(component);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();

    // eslint-disable-next-line playwright/no-conditional-in-test
    if (defaultProps.color) {
      await expect(icon).toHaveAttribute('color', `${defaultProps.color}`);
    }

    await expect(icon).toHaveAttribute('width', `${defaultProps.width}`);
    await expect(icon).toHaveAttribute('height', `${defaultProps.height}`);
  });
};

describe('STBK.ICON CloseIcon', () => {
  testComponent(<CloseIcon />, CloseIcon.name, 'close-icon', CloseIcon.defaultProps);
});

describe('STBK.ICON CloseModalIcon', () => {
  testComponent(
    <CloseModalIcon />,
    CloseModalIcon.name,
    'close-modal-icon',
    CloseModalIcon.defaultProps,
  );
});

describe('STBK.ICON EyeCrossedIcon', () => {
  testComponent(
    <EyeCrossedIcon />,
    EyeCrossedIcon.name,
    'eye-crossed-icon',
    EyeCrossedIcon.defaultProps,
  );
});

describe('STBK.ICON EyeIcon', () => {
  testComponent(<EyeIcon />, EyeIcon.name, 'eye-icon', EyeIcon.defaultProps);
});

describe('STBK.ICON RectangleIcon', () => {
  testComponent(
    <RectangleIcon />,
    RectangleIcon.name,
    'rectangle-icon',
    RectangleIcon.defaultProps,
  );
});

describe('STBK.ICON SearchIcon', () => {
  testComponent(<SearchIcon />, SearchIcon.name, 'search-icon', SearchIcon.defaultProps);
});
