import React from 'react';

import PropTypes from 'prop-types';

import { types } from '../../atoms/Button/props';

import { modalPropTypes, sizes } from './propTypes';
import { Actions, ConfirmButton } from './styled';

import Modal from './index';

const Confirm = function ({
  cancelButtonType,
  cancelText,
  children,
  description,
  id,
  imageSrc,
  isSubmitting,
  onClose,
  onSubmit,
  open,
  showCloseIcon,
  size,
  submitButtonType,
  submitIsDisabled,
  submitText,
  title,
  ...props
}) {
  return (
    <Modal
      description={description}
      id={id}
      imageSrc={imageSrc}
      onClose={onClose}
      open={open}
      showCloseIcon={showCloseIcon}
      size={size}
      title={title}
      {...props}
      actions={
        <Actions>
          <ConfirmButton
            // isDisabled={submitIsDisabled}
            aria-label="Cancel"
            bgType={cancelButtonType}
            id="cancel"
            onClick={onClose}
          >
            {cancelText}
          </ConfirmButton>
          <ConfirmButton
            aria-disabled={submitIsDisabled}
            aria-label="Confirm"
            bgType={submitButtonType}
            id="confirm"
            isDisabled={submitIsDisabled}
            isLoading={isSubmitting}
            onClick={onSubmit}
          >
            {submitText}
          </ConfirmButton>
        </Actions>
      }
    >
      {children}
    </Modal>
  );
};

Confirm.propTypes = {
  ...modalPropTypes,
  cancelText: PropTypes.string,
  cancelButtonType: PropTypes.oneOf(Object.values(types)),
  submitText: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  submitButtonType: PropTypes.oneOf(Object.values(types)),
  submitIsDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(sizes)),
};

Confirm.defaultProps = {
  cancelButtonType: types.tertiaryDefault,
  cancelText: 'Cancel',
  submitButtonType: types.primaryDefault,
  submitText: 'Submit',
  submitIsDisabled: false,
  isSubmitting: false,
  size: sizes.sm480px,
};

export default Confirm;
