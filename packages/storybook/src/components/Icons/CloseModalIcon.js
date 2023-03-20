import React from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

const CloseModalIcon = function ({ color, width, height, ...props }) {
  return (
    <svg
      aria-label="close-modal-icon"
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
        d="M10.0001 8.58574L18.293 0.292847L19.7072 1.70706L11.4143 9.99995L19.7072 18.2928L18.293 19.7071L10.0001 11.4142L1.70718 19.7071L0.292969 18.2928L8.58586 9.99995L0.292969 1.70706L1.70718 0.292847L10.0001 8.58574Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

CloseModalIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CloseModalIcon.defaultProps = {
  color: colors.grayH343A3E,
  height: 20,
  width: 20,
};

export default CloseModalIcon;
