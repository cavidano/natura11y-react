/*

// Button Icon Only

*/

import React, { forwardRef } from 'react';

import { Link } from 'react-router-dom';

import Icon from '../icon/Icon.js'

const ButtonIconOnly = forwardRef(( props, ref ) => {

    const {
        tag = 'button',
        iconHandle = 'home',
        ariaLabel = null,
        clickHandler = null,
		ariaExpanded = null
    } = props;

    let button;

	switch (tag) {
		case 'button':
			button = (
				<button
					ref={ref}
					className='button button--icon-only'
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
					className='button button--icon-only'
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
					className='button button--icon-only'
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
