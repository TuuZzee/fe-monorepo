import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

const EyeIcon = function ({ width, height, color, ...props }) {
  return (
    <svg
      aria-label="eye-icon"
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
        d="M18.8193 7.96255C20.437 8.97515 21.8121 10.3349 22.8473 11.9436L23 12.1868C18.9188 18.3135 10.6855 19.9437 4.61038 15.8278C3.28021 14.9266 2.12389 13.7901 1.19688 12.4741L1 12.1868L1.01294 12.1658C4.77914 6.04617 12.7513 4.16433 18.8193 7.96255ZM12 8.2C9.8737 8.2 8.15 9.9237 8.15 12.05C8.15 14.1763 9.8737 15.9 12 15.9C14.1263 15.9 15.85 14.1763 15.85 12.05C15.85 9.9237 14.1263 8.2 12 8.2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default EyeIcon;

EyeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

EyeIcon.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grayH212528,
};
