import PropTypes from 'prop-types';

const defaultChildrenProps = PropTypes.oneOfType([
  PropTypes.shape([]),
  PropTypes.shape({}),
  PropTypes.node,
  PropTypes.string,
]);

export default defaultChildrenProps;

export const refPropType = PropTypes.oneOfType([
  // Either a function
  PropTypes.func,
  // Or the instance of a DOM native element (see the note about SSR)
  PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.elementType) }),
]);
