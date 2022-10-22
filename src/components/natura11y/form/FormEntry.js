import React, { useRef, useState } from 'react';

import classNames from 'classnames';

const FormEntry = ( props ) => {

	const {
		labelText = 'Label',
		labelVisible = true,
		required = true,
		helpText = null,
		entryType = 'input' // 'textarea' 'select' 'check' 'radio' 
	} = props;

	const [isFocused, setIsFocused] = useState(false);

	const componentClasses = classNames(
		'form-entry',
		{ 
			'active' : !isFocused
		}
	);

	const screenReaderOnly = classNames(
		{ 
			'screen-reader-only' : !labelVisible
		}
	);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (

		<div
			className={componentClasses}
			data-required={required}>

			<label className='form-entry__field'>

				<span className={`form-entry__field__label ${screenReaderOnly}`}>
					{labelText}
				</span>

				{/* if input */}

				<span className='form-entry__field__input'>
					<input
						type='text'
						name='textInputExample'
						id='first-and-last-name'
						aria-describedby='help-first-and-last-name'
						onFocus={handleFocus}
						onBlur={handleBlur}
						required={required}
					/>
				</span>

				{/* if select */}

				<span className="form-entry__field__select">
					<select
						id="select-example"
						name="selectExample"
						aria-describedby="help-select-example">
							<option value="">Select</option>
							<option value="Option One">Option One</option>
							<option value="Option Two">Option Two</option>
							<option value="Option Three">Option Three</option>
							<option value="Option Four">Option Four</option>
							<option value="Option Five">Option Five</option>
					</select>
				</span>

				{/* if textarea */}

				<span className="form-entry__field__input">
					<textarea
						rows="8"
						name="textInputExample"
						id="text-input-example"
						aria-describedby="help-textarea-example"
					></textarea>
				</span>

				{/* if option */}

				<div className="form-entry__option">

					<div className="form-entry__option__radio">
						<label>
							<input
								type="radio"
								name="contactPreferences"
								id="contact-email"
								value="optionOne" />
								<span className="option__label">
									Contact me by email
								</span>
						</label>
					</div>

					<div className="form-entry__option__radio">
						<label>
							<input
								type="radio"
								name="contactPreferences"
								id="contact-phone"
								value="optionTwo" />
								<span className="option__label">
									Contact me by phone
								</span>
						</label>
					</div>

					<div className="form-entry__option__radio">
						<label>
							<input
								type="radio"
								name="contactPreferences"
								id="contact-none"
								value="optionThree" />
								<span className="option__label">
									Do not contact me
								</span>
						</label>
					</div>

				</div>

			</label>

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