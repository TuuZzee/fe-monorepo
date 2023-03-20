import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

const useEmailInput = initialValue => {
  const [emailInput, setEmailInput] = useState({
    emailValue: initialValue,
    isEmailValid: initialValue !== '' && isEmail(initialValue),
  });

  const handleEmailInputChange = NewEmailValue => {
    setEmailInput({
      emailValue: NewEmailValue,
      isEmailValid: NewEmailValue !== '' && isEmail(NewEmailValue),
    });
  };

  useEffect(() => {
    if (initialValue) {
      handleEmailInputChange(initialValue);
    }
  }, [initialValue]);

  return { emailInput, handleEmailInputChange };
};

export const emailInputProps = {
  emailValue: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
};

export default useEmailInput;
