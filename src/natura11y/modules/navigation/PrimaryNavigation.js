/*

// Primary Navigation

*/

import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
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
						<Link to='/about'>About</Link>
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

				<button
					ref={menuButtonRef}
					onClick={handleClick}
					className='button button--icon-only mobile-menu-toggle'
					title='Menu'
					aria-expanded={menuShow ? true : false}
				>
					<span
						className={`icon ${menuShow ? 'icon-close' : 'icon-menu'}`}
						aria-hidden='true'
					></span>
					
				</button>
			</div>

			<div className='primary-nav__actions'>
				<button className='button button--icon-only' aria-label='Language'>
					<span className='icon icon-mode-light-dark'></span>
				</button>
			</div>

		</div>
        
	);
};

export default PrimaryNavigation;