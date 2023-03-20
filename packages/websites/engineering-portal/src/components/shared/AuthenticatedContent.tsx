import React, { useEffect, FC, ReactNode } from 'react';

import Cookies from 'js-cookie';
import { useIntl } from 'react-intl';
import { toastr } from 'react-redux-toastr';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authSelector, fetchIdentity } from '../../redux/slices/auth';

import LoadingSpinner from './LoadingSpinner';

interface AuthenticatedContentProps {
  children?: ReactNode;
}

const AuthenticatedContent: FC<AuthenticatedContentProps> = function ({ children }) {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const { isLoading, authenticatedProfile, error, isFetched } = useAppSelector(authSelector);

  useEffect(() => {
    const jwt = Cookies.get('CF_AUTHORIZATION');
    if (!jwt) {
      toastr.error(
        intl.formatMessage({ id: 'errorMsg.title' }),
        intl.formatMessage({ id: 'errorMsg.unauthenticated' }),
      );
    } else if (!isFetched) {
      dispatch(fetchIdentity());
    }
  }, [dispatch, intl, isFetched]);

  useEffect(() => {
    if (isFetched && error) {
      toastr.error(intl.formatMessage({ id: 'errorMsg.title' }), error.message);
    }
  }, [error, intl, isFetched]);

  return isLoading || !authenticatedProfile ? (
    <LoadingSpinner content={intl.formatMessage({ id: 'auth.loading' })} />
  ) : (
    <div>{children}</div>
  );
};

AuthenticatedContent.defaultProps = {
  children: null,
};

export default AuthenticatedContent;
