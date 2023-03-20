import React from 'react';

import { TextP2 } from '../../atoms/Typography';

import { modalPropTypes, sizes } from './propTypes';
import {
  Modal as StyledModal,
  ModalHeader,
  ModalBody,
  CloseModalButton,
  ModalTitle,
  LogoImage,
  ModalActions,
} from './styled';

const Modal = function ({
  onClose,
  open,
  imageSrc,
  title,
  description,
  showCloseIcon,
  children,
  id,
  noPadding,
  size,
  actions,
  isOverflowYEnabled,
  ...props
}) {
  return (
    <StyledModal
      $noPadding={noPadding}
      aria-describedby="modal-description"
      aria-labelledby="modal-title"
      aria-modal="true"
      id={`${id}-modal`}
      onClose={onClose}
      open={open}
      role="dialog"
      size={size}
      {...props}
    >
      <ModalHeader $noPadding={noPadding}>
        {showCloseIcon && <CloseModalButton id="close-button" onClick={onClose} />}
        {imageSrc && <LogoImage src={imageSrc} />}
        {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
        {description && <TextP2 id="modal-description">{description}</TextP2>}
      </ModalHeader>
      <ModalBody $isOverflowYEnabled={isOverflowYEnabled}>{children}</ModalBody>
      {actions && <ModalActions>{actions}</ModalActions>}
    </StyledModal>
  );
};

Modal.propTypes = modalPropTypes;

Modal.defaultProps = {
  showCloseIcon: true,
  title: '',
  description: '',
  imageSrc: '',
  id: '',
  noPadding: false,
  size: sizes.sm480px,
  actions: null,
  isOverflowYEnabled: false,
};

export default Modal;
