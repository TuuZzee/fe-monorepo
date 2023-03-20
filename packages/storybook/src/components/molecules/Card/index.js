import React from 'react';

import PropTypes from 'prop-types';

import defaultChildrenProps from '@namespace/web-shared/propTypes/common';

import { CenteredContainer } from '../../styledComponents';

import CardText from './CardText';
import { CardWrapper } from './styled';

const Card = function ({ children, image, ...props }) {
  return (
    <CardWrapper {...props}>
      {image && <CenteredContainer>{image}</CenteredContainer>}
      {children}
    </CardWrapper>
  );
};

Card.propTypes = {
  children: defaultChildrenProps,
  image: PropTypes.node,
};

Card.defaultProps = {
  children: '',
  image: null,
};

export function CardWithText({ children, heading, subHeading, description, ...props }) {
  return (
    <Card {...props}>
      <CardText description={description} heading={heading} subHeading={subHeading} />
      {children}
    </Card>
  );
}

CardWithText.propTypes = {
  children: defaultChildrenProps,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
};

CardWithText.defaultProps = {
  children: '',
  heading: 'Heading',
  subHeading: 'Sub-Heading',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

export default Card;
