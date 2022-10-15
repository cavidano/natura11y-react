/*

// Alert

*/

import React, { useRef } from 'react';

import ButtonIconOnly from '../button/ButtonIconOnly';
import Icon from '../icon/Icon';

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
	let iconHandle = success === true ? 'confirm' : 'warn';

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
					iconHandle='close'
					clickHandler={handleAlertClose}
					ariaLabel='Close'
				/>
			)}

			<div className='alert__title h5'>
				<Icon iconHandle={iconHandle} />
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