import React, { useState, useEffect, Fragment } from 'react';

import RequiredIndicator from './RequiredIndicator';
import FormEntry from './FormEntry';
import Alert from '../alert/Alert';

const FormValidation = () => {

  const [formComplete, setFormComplete] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(false);
  const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);

  const [enteredMessage, setEnteredMessage] = useState('');
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(false);
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const [enteredFavBird, setEnteredFavBird] = useState('');
  const [enteredFavBirdIsValid, setEnteredFavBirdIsValid] = useState(false);
  const [enteredFavBirdTouched, setEnteredFavBirdTouched] = useState(false);

  const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const phoneIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched;
  const messageIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  const favBirdIsInvalid = !enteredFavBirdIsValid && enteredFavBirdTouched;

  useEffect(() => {
  
    console.log(`Hello ${formErrors}`);
    const element = document.querySelector('.is-invalid');

    if (element) {
			element.scrollIntoView({ block: 'start', behavior: 'smooth' });
			element.querySelector('input').focus();
		}
  
  }, [formErrors]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value); 
    setEnteredNameTouched(true);

    if (event.target.value !== '') {
			setEnteredNameIsValid(true);
		} else {
			setEnteredNameIsValid(false);
		}
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value); 
    setEnteredEmailTouched(true);

    if (event.target.value !== '') {
			setEnteredEmailIsValid(true);
		} else {
			setEnteredEmailIsValid(false);
		}
  }

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value); 
    setEnteredPhoneTouched(true);

    if (event.target.value !== '') {
			setEnteredPhoneIsValid(true);
		} else {
			setEnteredPhoneIsValid(false);
		}
  }

  const messageChangeHandler = (event) => {
    console.log(`MY MESSAGE IS: ${event.target.value}`)
    setEnteredMessage(event.target.value); 
    setEnteredMessageTouched(true);

    if (event.target.value !== '') {
			setEnteredMessageIsValid(true);
		} else {
			setEnteredMessageIsValid(false);
		}
  }

  const favBirdChangeHandler = (event) => {
    setEnteredFavBird(event.target.value); 
    setEnteredFavBirdTouched(true);

    if (event.target.value !== '') {
			setEnteredFavBirdIsValid(true);
		} else {
			setEnteredFavBirdIsValid(false);
		}
  }

  const formSubmitHandler = (event) => {

    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPhoneTouched(true);
    setEnteredMessageTouched(true);
    setEnteredFavBirdTouched(true);

    if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			setFormErrors((current) => [...current, 'Name']);
			return;
		}

		setEnteredNameIsValid(true);

		if (enteredEmail.trim() === '') {
			setEnteredEmailIsValid(false);
			setFormErrors((current) => [...current, 'Email']);
			return;
		}

		setEnteredEmailIsValid(true);

		if (enteredPhone.trim() === '') {
			setEnteredPhoneIsValid(false);
			setFormErrors((current) => [...current, 'Phone']);
			return;
		}

		setEnteredPhoneIsValid(true);

		if (!enteredMessage.length) {
			setEnteredMessageIsValid(false);
			return;
		}

		setEnteredMessageIsValid(true);

		if (enteredFavBird === '') {
			setEnteredFavBirdIsValid(false);
			return;
		}

		setEnteredFavBirdIsValid(true);

    setFormComplete(true);

  }
  
  return (
		<Fragment>
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
						onChangeHandler={nameChangeHandler}
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
						onChangeHandler={emailChangeHandler}
						showError={emailIsInvalid ? true : false}
					/>

					<FormEntry
						labelText='Phone'
						required={true}
						helpText='Enter a valid phone number'
						entryType='tel'
						entryId='phone'
						entryName='phone'
						inputValue={enteredPhone}
						onChangeHandler={phoneChangeHandler}
						showError={phoneIsInvalid ? true : false}
					/>

					<FormEntry
						labelText='Leave a short message'
						required={true}
						entryType='textarea'
						entryId='message'
						entryName='message'
						onChangeHandler={messageChangeHandler}
						showError={messageIsInvalid ? true : false}
					/>

					<FormEntry
						labelText='Favorite Bird'
						entryType='groupRadio'
						required={true}
						helpText='Pick your favorite bird'
						entryId='fav-bird'
						entryName='favBird'
						onChangeHandler={favBirdChangeHandler}
						showError={favBirdIsInvalid ? true : false}
					/>

					<button className='button theme-primary width-100 border-radius-pill margin-y-4'>
						Send
					</button>

				</form>
			) : (
			<Alert title='Thank you for your input'>
          		<p>Your information has been sent.</p>
        	</Alert>
			)}
		</Fragment>
	);
}

export default FormValidation;