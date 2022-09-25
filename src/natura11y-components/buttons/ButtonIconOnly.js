/*

// Button

*/

import React, { forwardRef } from 'react';

import { Link } from 'react-router-dom';

const ButtonIconOnly = forwardRef(( props, ref ) => {

    const {
        tag = 'button',
        iconClassSuffix = 'home',
        ariaLabel = null,
        clickHandler = null,
		ariaExpanded = null
    } = props;

    const buttonIcon = <span className={`icon icon-${iconClassSuffix}`} aria-hidden='true'></span>;

    let button;

	if (tag === 'button') {
		button = (
			<button
				ref={ref}
				className='button button--icon-only'
				onClick={clickHandler}
				aria-label={ariaLabel}
					aria-expanded={ariaExpanded}
			>
				{buttonIcon}
			</button>
		);
	} else if (tag === 'link') {
		button = (
			<Link
				className='button button--icon-only'
				to='#1'
				aria-label={ariaLabel}
			>
				{buttonIcon}
			</Link>
		);
	}
    
    return button;
});

export default ButtonIconOnly;
