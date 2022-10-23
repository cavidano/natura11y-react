import React from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const Form = () => {
  return (

    <form className='font-size-md'>

        <RequiredIndicator />

        <FormEntry
          labelText='Full Name'
          helpText='Enter your first and last name'
        />

        <FormEntry />

        <FormEntry entryType='select' />

        <FormEntry entryType='groupRadio' />

        <FormEntry entryType='groupCheck' />

        <FormEntry entryType='fileUpload' />

        <button className="button theme-primary width-100 border-radius-pill">Send</button>

    </form>

  );
}

export default Form;