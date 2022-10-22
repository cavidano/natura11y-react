import React, { useRef, useState, useEffect } from 'react';

import classNames from 'classnames';

const FormEntry = ( props ) => {

	const {
		labelText = 'Label',
		labelVisible = true,
		required = true,
		helpText = null,
		entryType = 'input' // values: 'input' 'textarea' 'select' 'groupRadio' 'groupCheck' 'SingleCheck' 'switch' 'fileUpload'
	} = props;

	const [isFocused, setIsFocused] = useState(false);

	const componentClasses = classNames(
		'form-entry',
		{ 
			'active' : isFocused
		}
	);

	const screenReaderOnly = classNames(
		{ 
			'screen-reader-only' : !labelVisible
		}
	);

	const formEntryFieldClass = classNames(
		{ 
			'form-entry__field__input' : entryType === 'input' || entryType === 'textarea',
			'form-entry__field__select' : entryType === 'select',
			'form-entry__option' : entryType === 'groupRadio' || entryType === 'groupCheck',
		}
	);

	let FieldTag = `label`; // default
	let LabelTag = `span`; // default

	if (entryType === 'groupRadio' || entryType === 'groupCheck') {
		FieldTag = `fieldset`;
		LabelTag = `legend`;
	}

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const getEntryField = () => {

		switch (entryType) {

			case 'input':
				return (
					<input
						type='text'
						name='textInputExample'
						id='first-and-last-name'
						aria-describedby='help-first-and-last-name'
						onFocus={handleFocus}
						onBlur={handleBlur}
						required={required}
					/>
				);
				break;

			case 'select':
				return (
					<select
						id="select-example"
						name="selectExample"
						aria-describedby="help-select-example"
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
							<option value="">Select</option>
							<option value="Option One">Option One</option>
							<option value="Option Two">Option Two</option>
							<option value="Option Three">Option Three</option>
							<option value="Option Four">Option Four</option>
							<option value="Option Five">Option Five</option>
					</select>
				);
				break;

			case 'textarea':
				return (
					<textarea
						rows="8"
						name="textInputExample"
						id="text-input-example"
						aria-describedby="help-textarea-example"
						onFocus={handleFocus}
						onBlur={handleBlur}
					></textarea>
				);
				break;

			case 'groupRadio':
				return (
					<>
						<div class="form-entry__option__radio">
							<label>
								<input
									type="radio"
									name="radioGroupExample"
									id="radio-option-one"
									value="optionOne"
								/>
								<span class="option__label">
									Option One
								</span>
							</label>
						</div>

						<div class="form-entry__option__radio">
							<label>
								<input
									type="radio"
									name="radioGroupExample"
									id="radio-option-two"
									value="optionTwo"
								/>
								<span class="option__label">
									Option Two
								</span>
							</label>
						</div>

						<div class="form-entry__option__radio">
							<label>
								<input
									type="radio"
									name="radioGroupExample"
									id="radio-option-three"
									value="optionThree" />
									<span class="option__label">
										Option Three
									</span>
							</label>
						</div>
					</>
				);
				break;

			default:
				//
		}
	
	}

	return (

		<div
			className={componentClasses}
			data-required={required}>

			<FieldTag className='form-entry__field'>

				<LabelTag className={`form-entry__field__label ${screenReaderOnly}`}>
					{labelText}
				</LabelTag>

				<span className={`${formEntryFieldClass}`}>
					{getEntryField()}
				</span>

			</FieldTag>

			{helpText && (
				<small
					className='form-entry__help'
					id='help-first-and-last-name'
				>
					{helpText}
				</small>
			)}

		</div>

	);
};

export default FormEntry;