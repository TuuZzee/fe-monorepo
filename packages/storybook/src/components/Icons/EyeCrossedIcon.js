import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

const EyeCrossedIcon = function ({ width, height, color, ...props }) {
  return (
    <svg
      aria-label="eye-crossed-icon"
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
        d="M21.0279 3.55563L19.4723 2L15.0327 6.43959C9.75508 5.15499 4.03233 7.33736 1.01294 12.2435L1 12.2645L1.19688 12.5518C2.12389 13.8678 3.28021 15.0044 4.61038 15.9055C4.80258 16.0358 4.99695 16.1602 5.19328 16.279L1.87227 19.6L3.4279 21.1556L21.0279 3.55563ZM8.29482 13.1775L13.0496 8.42265C12.7159 8.32831 12.3639 8.27783 12 8.27783C9.8737 8.27783 8.15 10.0015 8.15 12.1278C8.15 12.4917 8.20048 12.8438 8.29482 13.1775ZM12 15.9778C11.6362 15.9778 11.2842 15.9274 10.9506 15.8331L8.95998 17.8237C14.1752 19.062 19.8357 17.0149 23 12.2645L22.8473 12.0213C21.8121 10.4126 20.437 9.05288 18.8193 8.04028L18.7725 8.01112L15.7052 11.0784C15.7995 11.412 15.85 11.764 15.85 12.1278C15.85 14.2541 14.1263 15.9778 12 15.9778Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default EyeCrossedIcon;

EyeCrossedIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

EyeCrossedIcon.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grayH212528,
};
