import React, { useState, forwardRef } from 'react';

import classNames from 'classnames';

const FormEntry = forwardRef((props, ref) => {

	const {
		labelVisible = true,
		labelText = 'Label',
		helpText = null,
		required = false,
		showError = false,
		entryType = 'input', // values: 'input' 'textarea' 'select' 'groupRadio' 'groupCheck' 'SingleCheck' 'switch' 'fileUpload'
		entryId = null,
		entryName = null,
		inputValue = '',
		onChangeHandler = null,
		ariaDescribedBy = null,
		utilities = null,
	} = props;

	const [isFocused, setIsFocused] = useState(false);

	const componentClasses = classNames(
		'form-entry',
		{
			'is-invalid': showError,
			[`${utilities}`]: utilities !== null
		}
	);

	const activeClass = classNames({
		active: isFocused,
	});

	const screenReaderOnly = classNames({
		'screen-reader-only': !labelVisible,
	});

	const formEntryFieldClass = classNames({
		'form-entry__field__input':
			entryType === 'input' ||
			entryType === 'textarea' ||
			entryType === 'fileUpload',
		'form-entry__field__select': entryType === 'select',
		'form-entry__option':
			entryType === 'groupRadio' || 
			entryType === 'groupCheck' ||
			entryType === 'singleCheck' ||
			entryType === 'singleCheckSwitch',
	});

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

	const entryField = () => {
		switch (entryType) {
			case 'input':

				return (
					<input
						ref={ref}
						type='text'
						name={entryName ? entryName : 'textInputId'}
						id={entryId ? entryId : 'text-input-id'}
						aria-describedby={ariaDescribedBy ? ariaDescribedBy : 'text-input-help-id'}
						onChange={onChangeHandler}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={inputValue}
						required={required}
					/>
				);
				break;

			case 'select':

				return (
					<select
						id='select-example'
						name='selectExample'
						aria-describedby='help-select-example'
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						<option value=''>Select</option>
						<option value='Option One'>Option One</option>
						<option value='Option Two'>Option Two</option>
						<option value='Option Three'>Option Three</option>
						<option value='Option Four'>Option Four</option>
						<option value='Option Five'>Option Five</option>
					</select>
				);
				break;

			case 'textarea':
			
				return (
					<textarea
						rows='8'
						name='textInputExample'
						id='text-input-example'
						aria-describedby='help-textarea-example'
						onFocus={handleFocus}
						onBlur={handleBlur}
					></textarea>
				);
				break;

			case 'groupRadio':

				const radioOptions = [
					'Option One',
					'Option Two',
					'Option Three',
					'Option Four',
				];

				const radios = radioOptions.map((radio, index) => (
					<div
						className={`form-entry__option__radio ${activeClass}`}
						key={index}
					>
						<label>
							<input
								ref={ref}
								type='radio'
								name='radioGroupExample'
								id={`radio-option-${index}`}
								onFocus={handleFocus}
								onBlur={handleBlur}
								value={`option-${index}`}
							/>
							<span className='option__label'>{radio}</span>
						</label>
					</div>
				));

				return <>{radios}</>;

			case 'groupCheck':

				const checkOptions = [
					'Option One',
					'Option Two',
					'Option Three',
					'Option Four',
				];

				const checkboxes = checkOptions.map((check, index) => (
					<div className={`form-entry__option__check`} key={index}>
						<label className={activeClass}>
							<input
								type='checkbox'
								name='checkboxGroupExample'
								id={`check-option-${index}`}
								value={`option-${index}`}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
							<span className='option__label'>{check}</span>
						</label>
					</div>
				));

				return <>{checkboxes}</>;

			case 'singleCheck':

				return (
					<div className='form-entry__option__check'>
						<label>
							<input
								type='checkbox'
								name='singleOption'
								id='single-option'
								value='option'
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
							<span className='option__label'>Option</span>
						</label>
					</div>
				);

			case 'singleCheckSwitch':

				return (
					<div className='form-entry__option__check'>
						<div className='form-entry__option__switch'>
							<label>
								<input
									type='checkbox'
									name='singleOption'
									id='switch-option'
									value='option'
								/>
								<span className='switch__slider'></span>
								<span className='option__label'>Recieve Notifications</span>
							</label>
						</div>
					</div>
				);

			case 'fileUpload':

				return (
					<span className='file-upload'>

						<span className='file-upload__drop'>
							<span className='file-upload__drop__text'>Drag and Drop</span>
						</span>

						<input
							className='file-upload__input'
							type='file'
							name='fileUploadExample'
							id='file-uploadsple'
							accept='image/*'
						/>

						<span className='button button--outline button--has-icon file-upload__button'>
							<span className='icon icon-upload'></span>
							<span className='button__text'>Browse for a File</span>
						</span>

					</span>
				);

				break;

			default:
			// do nothing
		}
	};

	return (
		<div
			className={`${componentClasses} ${entryType !== 'groupRadio' || entryType !== 'groupCheck' ? activeClass : null}`}
			data-required={required}
		>
			<FieldTag className='form-entry__field'>

				<LabelTag className={`form-entry__field__label ${screenReaderOnly}`}>
					{labelText}
				</LabelTag>

				{showError && (

				<small className="form-entry__feedback">
					<span className="icon icon-warn" aria-hidden="true"></span>
					<span className="message">
						<strong>Custom Error Message</strong>
					</span>	
				</small>
				
				)}
				
				<span className={`${formEntryFieldClass}`}>
					{entryField()}
				</span>
			
			</FieldTag>

			{helpText && (

			<small className='form-entry__help' id={`help-${entryId ? entryId : 'text-input-id'}`}>
				{helpText}
			</small>
			
			)}

		</div>
	);
});

export default FormEntry;