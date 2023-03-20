import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

const SearchIcon = function ({ width, height, color, ...props }) {
  return (
    <svg
      aria-label="search-icon"
      color={color}
      fill="none"
      height={height}
      role="img"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18C11.3707 18 13.1002 17.3957 14.504 16.3717L21.3176 22.7311L22.6823 21.269L15.9741 15.008C17.2375 13.5245 18 11.6013 18 9.5C18 4.80558 14.1944 1 9.5 1ZM9.5 3C13.0899 3 16 5.91015 16 9.5C16 13.0899 13.0899 16 9.5 16C5.91015 16 3 13.0899 3 9.5C3 5.91015 5.91015 3 9.5 3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SearchIcon;

SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grayH868D94,
};
