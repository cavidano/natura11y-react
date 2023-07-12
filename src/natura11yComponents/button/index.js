import React from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import Icon from '../icon/Icon';

const Button = (props) => {

	const {
		tag = 'button',
		title = 'Button',
		linkUrl = '#1',
		outline = false,
		iconHandle = null,
		utilities = null,
		clickHandler = null,
	} = props;

	const componentClasses = classNames('button', {
		'button--outline': outline,
		'button--has-icon': iconHandle !== null,
		[`${utilities}`]: utilities !== null,
	});

	const buttonContents = () => {
		return iconHandle !== null ? (
			<>
				<Icon iconHandle={iconHandle} />
				<span className='button__text'>{title}</span>
			</>
		) : (
			title
		);
	}

	return (
		<>
			{tag === 'button' && (
				<button className={componentClasses} onClick={clickHandler}>
					{buttonContents()}
				</button>
			)}

			{tag === 'link' && (
				<Link className={componentClasses} to={linkUrl}>
					{buttonContents()}
				</Link>
			)}

			{tag !== 'button' && tag !== 'link' && (
				<a className={componentClasses} href={linkUrl}>
					{buttonContents()}
				</a>
			)}
		</>
	);
};

export default Button;