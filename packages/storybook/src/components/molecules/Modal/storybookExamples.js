import React from 'react';

import { types } from '../../atoms/Button/props';

import Confirm from './Confirm';

const ConfirmModal = function (props) {
  return (
    <Confirm
      cancelButtonType={types.primaryCancel}
      open
      showCloseIcon
      submitButtonType={types.primaryDefault}
      {...props}
    />
  );
};

export default ConfirmModal;
