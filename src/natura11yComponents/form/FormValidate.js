import React, { useState, useRef } from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const FormValidate = () => {
  
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) => {

    event.preventDefault();

    console.log(`I entered ${enteredName}`);
    
    const enteredValue = nameInputRef.current.value;

    console.log(`My entered value is ${enteredValue}`);

  }
  

  return (

    <form autoComplete='off' onSubmit={formSubmitHandler}>

        <RequiredIndicator />

        <FormEntry
          ref={nameInputRef}
          labelText='First Name'
          required={true}
          helpText='Enter your first name only'
          entryId='first-name'
          entryName='firstName'
          inputValue={enteredName}
          onChangeHandler={nameInputChangeHandler}
        />

        <button className="button theme-primary width-100 border-radius-pill margin-y-5">Send</button>

    </form>

  );
}

export default FormValidate;