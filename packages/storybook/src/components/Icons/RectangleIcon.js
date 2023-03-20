import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

const RectangleIcon = function ({ width, height, color, ...props }) {
  return (
    <svg
      aria-label="rectangle-icon"
      color={color}
      fill="none"
      height={height}
      role="img"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="currentColor" height="20" rx="2" width="20" />
    </svg>
  );
};

export default RectangleIcon;

RectangleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

RectangleIcon.defaultProps = {
  width: 14,
  height: 14,
  color: colors.grayHACB4BB,
};
