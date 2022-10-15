import React, { useState } from 'react';

import classNames from 'classnames';

import ButtonIconOnly from '../button/ButtonIconOnly';

import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import Brand from './Brand';

const PrimaryNavigation = ( props ) => {

	const { 
		navType = 'inline', // 'inline' or 'below'
		breakpoint = 'lg',
		utilities = null,
	} = props;

	const [menuShow, setMenuShow] = useState(false);

	const handleClick = () => {
		setMenuShow(!menuShow);
	};

	const componentClasses = classNames(
		`primary-nav--${navType}--${breakpoint}`,
		{ 
			[`${utilities}`] : utilities !== null
		}
	);

	return (

		<div className={`${componentClasses}`}>
		
			<div className='primary-nav__logo'>
				<Link to='/' title='Home' data-logo='brand'>
					<Brand />
				</Link>
			</div>

			<nav
				className={`primary-nav__menu ${menuShow ? 'shown' : ''}`}
				id='main-menu'
				aria-label='Main Menu'
			>
				<ul>
					<li>
						<Dropdown />
					</li>
					<li>
						<Link to='#1'>Link</Link>
					</li>
					<li>
						<Link to='#1'>Link</Link>
					</li>
					<li>
						<Link to='#1'>Link</Link>
					</li>
				</ul>
			</nav>

			<div className='primary-nav__toggle'>

				<ButtonIconOnly
					iconHandle={menuShow ? 'close' : 'menu'}
					clickHandler={handleClick}
					ariaLabel='Menu'
					ariaExpanded={menuShow ? true : false}
				/>

			</div>

			<div className='primary-nav__actions'>

				<ButtonIconOnly
					iconHandle='mode-light-dark'
				/>

			</div>

		</div>
        
	);
};

export default PrimaryNavigation;