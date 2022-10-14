/*

// Alert

*/

import React, { useRef } from 'react';

import ButtonIconOnly from '../buttons/ButtonIconOnly';

const Alert = ( props ) => {

  	const {
		success = true,
		inverse = false,
		handleAlertClose = null,
		title = 'Alert Title',
		children = <p>Alert Description</p>,
	} = props;

	const closeButtonRef = useRef();

	let classConfirm = success === true ? ' alert--confirm' : '';
	let classWarn = success === false ? ' alert--warn' : '';
	let modifierInverse = inverse === true ? '--inverse' : '';
	let classDismissable = handleAlertClose !== null ? ' alert--dismissable' : '';
	let iconClass = success === true ? 'icon-confirm' : 'icon-warn';

	return (
		<div
			className={`alert${classConfirm}${classWarn}${modifierInverse}${classDismissable}`}
			aria-labelledby='alert-label'
			aria-describedby='alert-description'
			role='alert'
		>
			{handleAlertClose !== null && (
				<ButtonIconOnly
					ref={closeButtonRef}
					iconClassSuffix='close'
					clickHandler={handleAlertClose}
					ariaLabel='Close'
				/>
			)}

			<div className='alert__title h5'>
				<span
					className={`icon ${iconClass}`}
					aria-hidden='true'
				></span>
				<span className='alert__title__text' id='alert-label'>
					{title}
				</span>
			</div>

			<div className='alert__description' id='alert-description'>
				{children}
			</div>
		</div>
	);
};

export default Alert;