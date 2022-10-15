import React from 'react';

import { Link } from 'react-router-dom';

import Icon from '../icon/Icon';

const Button = ( props ) => {

    const {
        tag = 'button',
		title = 'Button',
		linkUrl = '#1',
        iconHandle = null,
		outline = false,
        clickHandler = null,
		utilityClasses = null
    } = props;

	let classHasIcon =  iconHandle !== null ? 'button--has-icon' : '';
	let classOutline =  outline ? 'button--outline' : '';

	const buttonContents = () => {
		return iconHandle !== null 
			? (
				<>
					<Icon iconHandle={iconHandle} />
					<span className="button__text">{title}</span>
				</>
			) : (
				<>{title}</>
			);
	} 

	let button;

	switch (tag) {
		case 'button':
			button = (
				<button
					className={`button ${classOutline} ${classHasIcon} ${utilityClasses}`}
					onClick={clickHandler}
				>
					{buttonContents()}
				</button>
			);
			break;

		case 'link':
			button = (
				<Link
					className={`button ${classOutline} ${classHasIcon}`}
					to={linkUrl}
				>
					{buttonContents()}
				</Link>
			);

			break;

		default:
			button = (
				<a
					className={`button ${classOutline} ${classHasIcon}`}
					href={linkUrl}
				>
					{buttonContents()}
				</a>
			);
	}

	return button;
};

export default Button;
