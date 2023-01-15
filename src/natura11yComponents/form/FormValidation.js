import React, { useState, createRef } from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';

const FormValidation = () => {

  const [formComplete, setFormComplete] = useState(false);

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredFavBird, setEnteredFavBird] = useState('');
  const [enteredFavBirdIsValid, setEnteredFavBirdIsValid] = useState(false);
  const [enteredFavBirdTouched, setEnteredFavBirdTouched] = useState(false);

  const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const favBirdIsInvalid = !enteredFavBirdIsValid && enteredFavBirdTouched;

	const radioRef = createRef();

  const favBirdChangeHandler = (event) => {
    setEnteredFavBird(event.target.value); 
    setEnteredFavBirdTouched(true);

    if (event.target.value !== '') {
			setEnteredFavBirdIsValid(true);
		} else {
			setEnteredFavBirdIsValid(false);
		}
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); 
    setEnteredNameTouched(true);

    if (event.target.value !== '') {
			setEnteredNameIsValid(true);
		} else {
			setEnteredNameIsValid(false);
		}
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value); 
    setEnteredEmailTouched(true);

    if (event.target.value !== '') {
			setEnteredEmailIsValid(true);
		} else {
			setEnteredEmailIsValid(false);
		}
  }

  const formSubmitHandler = (event) => {

    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredFavBirdTouched(true);

    if(enteredName.trim() === '') { 
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    if(enteredEmail.trim()  === '') {
      setEnteredEmailIsValid(false);
      return;
    }

    setEnteredEmailIsValid(true);

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
              labelText='Name'
              required={true}
              helpText='Enter your first and last name'
              entryId='name'
              entryName='name'
              inputValue={enteredName}
              onChangeHandler={nameInputChangeHandler}
              showError={nameIsInvalid ? true : false}
            />

            <FormEntry
              labelText='Email'
              required={true}
              helpText='Example: janeDoe@email.com'
              entryType='email'
              entryId='email'
              entryName='email'
              inputValue={enteredEmail}
              onChangeHandler={emailInputChangeHandler}
              showError={emailIsInvalid ? true : false}
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

export default FormValidation;