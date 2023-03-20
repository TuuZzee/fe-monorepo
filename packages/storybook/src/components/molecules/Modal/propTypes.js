import PropTypes from 'prop-types';

export const sizes = {
  xs400px: 'xs',
  sm480px: 'sm',
  md640px: 'md',
  lg800px: 'lg',
  full: 'full',
};

export const modalPropTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  showCloseIcon: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node,
  imageSrc: PropTypes.string,
  id: PropTypes.string,
  noPadding: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(sizes)),
  actions: PropTypes.node,
  isOverflowYEnabled: PropTypes.bool,
};
