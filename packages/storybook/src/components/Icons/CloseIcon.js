import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

const CloseIcon = function ({ width, height, color, ...props }) {
  return (
    <svg
      aria-label="close-icon"
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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
        fill="#ACB4BB"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M10.4439 12L5.72168 16.7222L7.27731 18.2778L11.9995 13.5556L16.7217 18.2778L18.2773 16.7222L13.5551 12L18.2773 7.2778L16.7217 5.72217L11.9995 10.4444L7.27731 5.72217L5.72168 7.2778L10.4439 12Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CloseIcon;

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grayHACB4BB,
};
