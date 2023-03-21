import React from 'react';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { ToastActionWrapper, SeeDetailsLink, CloseButton } from './styled';

const ToastAction = function ({ seeDetailsLink, remove, showClose }) {
  const intl = useIntl();

  return (
    <ToastActionWrapper>
      {seeDetailsLink && (
        <SeeDetailsLink href={seeDetailsLink}>
          {intl.formatMessage({ id: 'toast.seeDetails' })}
        </SeeDetailsLink>
      )}
      {showClose && (
        <CloseButton onClick={remove}>{intl.formatMessage({ id: 'toast.close' })}</CloseButton>
      )}
    </ToastActionWrapper>
  );
};

ToastAction.propTypes = {
  seeDetailsLink: PropTypes.string,
  remove: PropTypes.func,
  showClose: PropTypes.bool,
};

ToastAction.defaultProps = {
  seeDetailsLink: '',
  remove: () => {},
  showClose: false,
};

export default ToastAction;
