import React, { useState } from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const FormValidate = () => {

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredFirstNameIsValid, setEnteredFirstNameIsValid] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const firstNameIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched;
  const lastNameIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value); 
    setEnteredFirstNameTouched(true);

    if (event.target.value !== '') {
			setEnteredFirstNameIsValid(true);
		} else {
			setEnteredFirstNameIsValid(false);
		}
  }

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value); 
    setEnteredLastNameTouched(true);

    if (event.target.value !== '') {
			setEnteredLastNameIsValid(true);
		} else {
			setEnteredLastNameIsValid(false);
		}
  }

  const formSubmitHandler = (event) => {

    event.preventDefault();

    setEnteredFirstNameTouched(true);
    setEnteredLastNameTouched(true);

    if( enteredFirstName.trim() === '') { 
      setEnteredFirstNameIsValid(false);
      return;
    }

    setEnteredFirstNameIsValid(true);

    if( enteredLastName.trim()  === '') {
      setEnteredLastNameIsValid(false);
      return;
    }

    setEnteredLastNameIsValid(true);

    setEnteredFirstName('');
    setEnteredLastName('');

  }
  
  return (

    <form onSubmit={formSubmitHandler} autoComplete='off' noValidate>

        <RequiredIndicator />

        <FormEntry
          labelText='First Name'
          required={true}
          helpText='Enter your first name only'
          entryId='first-name'
          entryName='firstName'
          inputValue={enteredFirstName}
          onChangeHandler={firstNameInputChangeHandler}
          showError={firstNameIsInvalid ? true : false}
        />

        <FormEntry
          labelText='Last Name'
          required={true}
          helpText='Enter your last name only'
          entryId='last-name'
          entryName='lastName'
          inputValue={enteredLastName}
          onChangeHandler={lastNameInputChangeHandler}
          showError={lastNameIsInvalid ? true : false}
        />

        <button className="button theme-primary width-100 border-radius-pill margin-y-5">Send</button>

    </form>

  );
}

export default FormValidate;