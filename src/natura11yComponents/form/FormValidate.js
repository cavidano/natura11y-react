import React, { useState, createRef } from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const FormValidate = () => {

  const [formComplete, setFormComplete] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredFirstNameIsValid, setEnteredFirstNameIsValid] = useState(false);
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredFavBird, setEnteredFavBird] = useState('');
  const [enteredFavBirdIsValid, setEnteredFavBirdIsValid] = useState(false);
  const [enteredFavBirdTouched, setEnteredFavBirdTouched] = useState(false);

  const firstNameIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched;
  const lastNameIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;
  const favBirdIsInvalid = !enteredFavBirdIsValid && enteredFavBirdTouched;

	const radioRef = createRef()

  const favBirdChangeHandler = (event) => {
    setEnteredFavBird(event.target.value); 
    setEnteredFavBirdTouched(true);

    if (event.target.value !== '') {
			setEnteredFavBirdIsValid(true);
		} else {
			setEnteredFavBirdIsValid(false);
		}
  }

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
    setEnteredFavBirdTouched(true);

    if(enteredFirstName.trim() === '') { 
      setEnteredFirstNameIsValid(false);
      return;
    }

    setEnteredFirstNameIsValid(true);

    if(enteredLastName.trim()  === '') {
      setEnteredLastNameIsValid(false);
      return;
    }

    setEnteredLastNameIsValid(true);

    if(enteredFavBird === '') {
      setEnteredFavBirdIsValid(false);
      return;
    }

    setEnteredFavBirdIsValid(true);

    setFormComplete(true);

  }
  
  return (
    <>

      {!formComplete ? (
      
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

            <FormEntry
              ref={radioRef}
              labelText='Favorite Bird'
              entryType='groupRadio'
              required={true}
              helpText='Pick your favorite bird'
              entryId='fav-bird'
              entryName='favBird'
              onChangeHandler={favBirdChangeHandler}
              showError={favBirdIsInvalid ? true : false}
            />

            <button className="button theme-primary width-100 border-radius-pill margin-y-5">Send</button>

        </form>
      ) : (
        <p>cool</p>
      )}

    </>

  );
}

export default FormValidate;