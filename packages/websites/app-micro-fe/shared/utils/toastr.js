import React from 'react';

import { toastr as ReactReduxToastr } from 'react-redux-toastr';

import {
  RoundCheckIcon,
  RoundWarningIcon,
  RoundInfoIcon,
} from '@namespace/storybook/src/components/Icons';

import ToastAction from '../components/Toast';

const defaultOptions = (options = {}) => ({
  timeOut: 3000,
  removeOnHover: false,
  closeOnToastrClick: false,
  progressBar: !(options.timeOut === 0),
  ...options,
});

const toastr = {
  success: (title, message = '', options = {}) => {
    const toastrOptions = defaultOptions(options);
    ReactReduxToastr.success(title, message, {
      component: (
        <ToastAction seeDetailsLink={options.seeDetailsLink} showClose={!toastrOptions.timeOut} />
      ),
      icon: <RoundCheckIcon />,
      className: 'toastr-success',
      ...toastrOptions,
    });
  },
  error: (title, message = '', options = {}) => {
    const toastrOptions = defaultOptions(options);
    ReactReduxToastr.error(title, message, {
      component: (
        <ToastAction seeDetailsLink={options.seeDetailsLink} showClose={!toastrOptions.timeOut} />
      ),
      icon: <RoundWarningIcon />,
      className: 'toastr-error',
      ...toastrOptions,
    });
  },
  warning: (title, message = '', options = {}) => {
    const toastrOptions = defaultOptions(options);
    ReactReduxToastr.warning(title, message, {
      component: (
        <ToastAction seeDetailsLink={options.seeDetailsLink} showClose={!toastrOptions.timeOut} />
      ),
      icon: <RoundInfoIcon />,
      className: 'toastr-warning',
      ...toastrOptions,
    });
  },
  loading: (title, message = '', options = {}) => {
    const toastrOptions = defaultOptions(options);
    ReactReduxToastr.info(title, message, {
      component: (
        <ToastAction seeDetailsLink={options.seeDetailsLink} showClose={!toastrOptions.timeOut} />
      ),
      className: 'toastr-loading',
      ...toastrOptions,
    });
  },
};

export default toastr;
