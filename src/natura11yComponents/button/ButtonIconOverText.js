import { forwardRef } from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import Icon from '../icon/Icon';

const ButtonIconOverText = forwardRef((props, ref) => {

	const {
		iconHandle = 'home', // Arbitrary default value
		iconUtilities = null,
		label = 'Home',
		tag = 'button',
		linkUrl = '#1',
		ariaLabel = null,
		clickHandler = null,
		ariaExpanded = null,
	} = props;

	const componentClasses = classNames(
		'button', 
		'button--icon-over-text'
	);

	const buttonContent = (
		<>
			<Icon iconHandle={iconHandle} utilities={iconUtilities} />
			<span className='button__text'>{label}</span>
		</>
	);

	return (
		<>
			{tag === 'button' && (
				<button
					ref={ref}
					className={componentClasses}
					onClick={clickHandler}
					aria-label={ariaLabel}
					aria-expanded={ariaExpanded}
				>
					{buttonContent}
				</button>
			)}

			{tag === 'link' && (
				<Link className={componentClasses} to={linkUrl} aria-label={ariaLabel}>
					{buttonContent}
				</Link>
			)}

			{tag !== 'button' && tag !== 'link' && (
				<a className={componentClasses} href={linkUrl} aria-label={ariaLabel}>
					{buttonContent}
				</a>
			)}
		</>
	);
});

export default ButtonIconOverText;
