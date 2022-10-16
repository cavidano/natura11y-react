import React from 'react';

import classNames from 'classnames';

const FormEntry = ( props ) => {

	const {
		labelText = 'Label',
		labelVisible = true,
		required = true,
		helpText = null
	} = props;

	const screenReaderOnly = classNames(
		{ 
			'screen-reader-only' : !labelVisible
		}
	);

	let activeTarget = '.form-entry';

	const handleFocus = (e) => {
		e.target.closest(activeTarget).classList.add('active');
	};

	const handleBlur = (e) => {
		e.target.closest(activeTarget).classList.remove('active');
	};

	return (

		<div
			className='form-entry'
			data-required={required}>

			<label className='form-entry__field'>

				<span className={`form-entry__field__label ${screenReaderOnly}`}>
					{labelText}
				</span>

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