import React from 'react';

import classNames from 'classnames';

const FileUpload = (props) => {
	const {
		labelText = 'Label',
		labelVisible = true,
		required = true,
		helpText = null,
	} = props;

	const screenReaderOnly = classNames({
		'screen-reader-only': !labelVisible,
	});

	// let activeTarget = '.form-entry';

	// const handleFocus = (e) => {
	// 	e.target.closest(activeTarget).classList.add('active');
	// };

	// const handleBlur = (e) => {
	// 	e.target.closest(activeTarget).classList.remove('active');
	// };

	return (
		<div
			className='form-entry'
			data-required={required}>

			<label className='form-entry__field'>

				<span className={`form-entry__field__label ${screenReaderOnly}`}>
					{labelText}
				</span>

				<span className='form-entry__field__input'>

					<span class='file-upload'>

						<span class='file-upload__drop'>
							<span class='file-upload__drop__text'>
								Drag and Drop
							</span>
						</span>

						<input
							class='file-upload__input'
							type='file'
							name='fileUploadExample'
							id='file-uploadsple'
							accept='image/*'
						/>

						<span class='button button--outline button--has-icon file-upload__button'>
							<span class='icon icon-upload'></span>
							<span class='button__text'>
								Browse for a File
							</span>
						</span>

					</span>

				</span>

			</label>

			{helpText && (

			<small className='form-entry__help' id='help-first-and-last-name'>
				{helpText}
			</small>
			
			)}
		</div>
	);
};

export default FileUpload;
