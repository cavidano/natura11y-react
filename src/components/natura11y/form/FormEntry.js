import React from 'react';

import classNames from 'classnames';

const FormEntry = ( props ) => {

	const {

		labelText = 'Label',
		labelVisible = true,
		helpText = 'Include first and last name'
	
	} = props;

	const screenReaderOnly = classNames(
		{ 
			'screen-reader-only' : !labelVisible
		}
	);

	return (
		<div className='form-entry'>

			<label class='form-entry__field'>
				<span class={`form-entry__field__label ${screenReaderOnly}`}>
				{labelText}
				</span>
				<span class='form-entry__field__input'>
					<input
						type='text'
						name='textInputExample'
						id='first-and-last-name'
						aria-describedby='help-first-and-last-name'
					/>
				</span>
			</label>

			{helpText && (
				<small class='form-entry__help' id='help-first-and-last-name'>
					{helpText}
				</small>
			)}

		</div>
	);
};

export default FormEntry;