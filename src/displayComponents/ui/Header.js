/*

// Primary Navigation

*/

import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import ButtonIconOnly from '../../natura11yComponents/buttons/ButtonIconOnly';
import Brand from './Brand';

const PrimaryNavigation = ( props ) => {

	const { 
		navType = 'inline', // 'inline' or 'below'
		breakpoint = 'lg' // breakpoint from mobile to desktop
	} = props;

	const menuButtonRef = useRef();

	const [menuShow, setMenuShow] = useState(false);

	const handleClick = () => {
		setMenuShow(!menuShow);
	};

	return (

		<div className={`primary-nav--${navType}--${breakpoint}`}>
		
			<div className='primary-nav__logo margin-left-n2'>
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
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>

			<div className='primary-nav__toggle'>

				<ButtonIconOnly
					ref={menuButtonRef}
					iconClassSuffix={menuShow ? 'close' : 'menu'}
					clickHandler={handleClick}
					ariaLabel='Menu'
					ariaExpanded={menuShow ? true : false}
				/>

			</div>

			<div className='primary-nav__actions'>

				<ButtonIconOnly
					iconClassSuffix='github'
				/>

			</div>

		</div>
        
	);
};

export default PrimaryNavigation;