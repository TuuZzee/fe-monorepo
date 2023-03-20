import React from 'react';

import { render, screen } from '@testing-library/react';

import { types } from '../Button/props';

import { loaderMain, loaderSec } from './styled';

import LoaderIcon from './index';

describe('STBK.LDRI Loader Icon', () => {
  test('Renders LoaderIcon', () => {
    render(<LoaderIcon bgType={types.primaryDestructive} />);
    expect(screen.getByRole('img', { name: 'loader-icon' })).toBeInTheDocument();
  });
  test('Render primary destructive Loader Icon', () => {
    render(<LoaderIcon bgType={types.primaryDestructive} />);
    expect(screen.getByRole('img', { name: 'loader-icon' })).toHaveStyle(
      `
      border: 3px solid ${loaderMain[types.primaryDestructive]};
      border-left: 3px solid ${loaderSec[types.primaryDestructive]};
      `,
    );
  });
});
