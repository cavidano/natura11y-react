import React, { useState, useRef, useEffect } from 'react';

import classNames from 'classnames';

const FormEntry = (props) => {

	const {
		labelText = 'Label',
		labelVisible = true,
		required = true,
		helpText = null,
		entryType = 'input', // values: 'input' 'textarea' 'select' 'groupRadio' 'groupCheck' 'SingleCheck' 'switch' 'fileUpload'
		entryId = null,
		entryName = null,
		ariaDescribedBy = null,
		utilities = null,
	} = props;

	const ref = useRef();

	const [isFocused, setIsFocused] = useState(false);

	const componentClasses = classNames('form-entry', {
		[`${utilities}`]: utilities !== null,
	});

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
			entryType === 'groupRadio' || entryType === 'groupCheck',
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
						type='text'
						name={entryName ? entryName : 'textInputId'}
						id={entryId ? entryId : 'text-input-id'}
						aria-describedby={ariaDescribedBy ? ariaDescribedBy : 'text-input-help-id'}
						onFocus={handleFocus}
						onBlur={handleBlur}
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
			className={`${componentClasses} ${entryType !== 'groupRadio' || entryType !== 'groupCheck'  ? activeClass : null}`}
			data-required={required}
		>
			<FieldTag className='form-entry__field'>
				<LabelTag className={`form-entry__field__label ${screenReaderOnly}`}>
					{labelText}
				</LabelTag>

				<span className={`${formEntryFieldClass}`}>{entryField()}</span>
			</FieldTag>

			{helpText && (
				<small className='form-entry__help' id={`help-${entryId ? entryId : 'text-input-id'}`}>
					{helpText}
				</small>
			)}
		</div>
	);
};

export default FormEntry;