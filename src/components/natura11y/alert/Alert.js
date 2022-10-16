import React, { useRef } from 'react';

import classNames from 'classnames';

import ButtonIconOnly from '../button/ButtonIconOnly';
import Icon from '../icon/Icon';

const Alert = ( props ) => {

  	const {
		success = true,
		inverse = false,
		handleAlertClose = null,
		title = 'Alert Title',
		children = <p>Alert Description</p>,
		utilities = null
	} = props;

	const closeButtonRef = useRef();

	const componentClasses = classNames(
		'alert',
		{ 
			'alert--confirm' : success && !inverse,
			'alert--confirm--inverse' : success && inverse,
			'alert--warn' : !success && !inverse,
			'alert--warn--inverse' : !success && inverse,
			'alert--dismissable' : handleAlertClose !== null,
			[`${utilities}`] : utilities !== null
		}
	);

	const iconClass = classNames(
		{ 
			'confirm' : success,
			'warn' : !success
		}
	);

	return (
		<div
			className={`${componentClasses}`}
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
				<Icon iconHandle={iconClass} />
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