import { useState } from 'react';
import { validation } from '../utils/helpers/validation';

const defaultValue = {
  email: null,
  password: null,
};

function useValidation() {
  const [isValidValue, setIsValidValue] = useState(defaultValue);

  const updateValidValue = (ref) => {
    const key = ref.current?.name;
    const value = ref.current?.value;
    const currentState = { ...isValidValue };

    if (!value) currentState[key] = null;
    else if (validation(key, value)) currentState[key] = true;
    else currentState[key] = false;

    if (currentState !== isValidValue) {
      setIsValidValue(currentState);
    }
  };

  return [isValidValue, updateValidValue];
}

export default useValidation;
