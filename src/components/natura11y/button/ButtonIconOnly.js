import React, { forwardRef } from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import Icon from '../icon/Icon.js'

const ButtonIconOnly = forwardRef(( props, ref ) => {

    const {
        tag = 'button',
        iconHandle = 'home',
		utilities = null,
        ariaLabel = null,
        clickHandler = null,
		ariaExpanded = null
    } = props;


	const componentClasses = classNames(
		'button',
		'button--icon-only',
		{
			[`${utilities}`] : utilities !== null
		}
	);

    let button;

	switch (tag) {
		case 'button':
			button = (
				<button
					ref={ref}
					className={`${componentClasses}`}
					onClick={clickHandler}
					aria-label={ariaLabel}
					aria-expanded={ariaExpanded}
				>
					<Icon iconHandle={iconHandle} />
				</button>
			);
			break;

		case 'link':
			button = (
				<Link
					className={`${componentClasses}`}
					to='#1'
					aria-label={ariaLabel}
				>
					<Icon iconHandle={iconHandle} />
				</Link>
			);
			
			break;
		
		default:
			button = (
				<a
					className={`${componentClasses}`}
					href='#1'
					aria-label={ariaLabel}
				>
					<Icon iconHandle={iconHandle} />
				</a>
			);
	}

    return button;
});

export default ButtonIconOnly;
