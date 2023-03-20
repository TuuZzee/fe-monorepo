import React from 'react';

import LogoImageSrc from '../../../../public/img/darkLogo.png';
import { types } from '../../atoms/Button/props';

import Confirm from './Confirm';

const ConfirmModal = function (props) {
  return (
    <Confirm
      cancelButtonType={types.primaryCancel}
      imageSrc={`${LogoImageSrc}`}
      open
      showCloseIcon
      submitButtonType={types.primaryDefault}
      {...props}
    />
  );
};

export default ConfirmModal;
