import React from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const Form = () => {
  return (
    <form>
        <RequiredIndicator />
        <FormEntry />
        <FormEntry />
    </form>
  );
}

export default Form;