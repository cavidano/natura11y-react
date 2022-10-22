import React from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const Form = () => {
  return (

    <form>

        <RequiredIndicator />

        <FormEntry
          labelText='Full Name'
          helpText='Enter your first and last name'
        />

        <FormEntry
          labelText='Twitter Handle'
        />

        <FormEntry entryType='select' />

        <FormEntry entryType='groupRadio' />

        <FormEntry entryType='groupCheck' />

        <FormEntry entryType='fileUpload' />


    </form>

  );
}

export default Form;