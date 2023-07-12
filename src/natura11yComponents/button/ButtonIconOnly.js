import { forwardRef } from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import Icon from '../icon/Icon';

const ButtonIconOnly = forwardRef((props, ref) => {

	const {
		tag = 'button',
		iconHandle = 'home',
		linkUrl = '#1',
		utilities = null,
		ariaLabel = null,
		clickHandler = null,
		ariaExpanded = null,
	} = props;

	const componentClasses = classNames(
		'button',
		'button--icon-only', 
		{
			[utilities]: utilities !== null,
		}
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
					<Icon iconHandle={iconHandle} />
				</button>
			)}

			{tag === 'link' && (
				<Link className={componentClasses} to={linkUrl} aria-label={ariaLabel}>
					<Icon iconHandle={iconHandle} />
				</Link>
			)}

			{tag !== 'button' && tag !== 'link' && (
				<a className={componentClasses} href={linkUrl} aria-label={ariaLabel}>
					<Icon iconHandle={iconHandle} />
				</a>
			)}
		</>
	);
});

export default ButtonIconOnly;