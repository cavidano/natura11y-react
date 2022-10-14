import React from 'react';

const Button = () => {

    const {
        tag = 'button',
        hasIcon = false,
        iconClassSuffix = 'home',
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
					className='button'
					onClick={clickHandler}
					aria-label={ariaLabel}
					aria-expanded={ariaExpanded}
				>
					{buttonIcon}
				</button>
			);
			break;

		case 'link':
			button = (
				<Link
					className='button'
					to='#1'
					aria-label={ariaLabel}
				>
					{buttonIcon}
				</Link>
			);

			break;

		default:
			button = (
				<a
					className='button'
					href='#1'
					aria-label={ariaLabel}
				>
					{buttonIcon}
				</a>
			);
	}

	return button;
};

export default Button;
