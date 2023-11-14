import React from 'react';

import PropTypes from 'prop-types';

import defaultChildrenProps from '@namespace/web-shared/propTypes/common';
import { colors } from '@namespace/web-shared/styles/theme';

import { TextP1, TitleH2, TitleH4 } from '../../atoms/Typography';
import { fonts } from '../../atoms/Typography/props';

import { CardColumnContainer } from './styled';

const CardText = function ({ heading, subHeading, description, ...props }) {
  return (
    <CardColumnContainer {...props}>
      {heading && <TitleH2 color={colors.grayH212528}>{heading}</TitleH2>}
      {subHeading && <TitleH4>{subHeading}</TitleH4>}
      {description && <TextP1 fontWeight={fonts.regular}>{description}</TextP1>}
    </CardColumnContainer>
  );
};

CardText.propTypes = {
  children: defaultChildrenProps,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
};

CardText.defaultProps = {
  children: '',
  heading: '',
  subHeading: '',
  description: '',
};

export default CardText;
