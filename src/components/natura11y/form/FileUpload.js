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

					<span className='file-upload'>

						<span className='file-upload__drop'>
							<span className='file-upload__drop__text'>
								Drag and Drop
							</span>
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
							<span className='button__text'>
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
