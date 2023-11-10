import React from 'react';

import PropTypes from 'prop-types';

import { types } from '../Button/props';
import { sizes as typoSizes } from '../Typography/props';

import { sizes } from './props';
import LoaderCircle, { LoaderOuterWrapper, LoadingContent } from './styled';

const LoaderIcon = function ({ bgType, size, content, ...props }) {
  return (
    <LoaderOuterWrapper>
      <LoaderCircle $bgType={bgType} size={size} {...props} aria-label="loader-icon" role="img" />
      {content && <LoadingContent size={typoSizes.p3F13px}>{content}</LoadingContent>}
    </LoaderOuterWrapper>
  );
};

LoaderIcon.propTypes = {
  bgType: PropTypes.oneOf(Object.values(types)),
  size: PropTypes.oneOf(Object.values(sizes)),
  content: PropTypes.string,
};

LoaderIcon.defaultProps = {
  bgType: types.primaryDefault,
  size: sizes.small,
  content: '',
};

export default LoaderIcon;
