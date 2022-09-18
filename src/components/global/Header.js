/*

// Global Header

*/

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const collapseButtonRef = useRef();

  const [collapseShow, setCollapseShow] = useState(false);

  const handleClick = () => {
      setCollapseShow(!collapseShow);
  }

  return (
    <div className="primary-nav--inline--lg box-shadow-1">

        <div className="primary-nav__logo">

            <Link to="/" title="Home" data-logo="brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="126" height="34" viewBox="0 0 126 34">
                    <g>
                        <polygon points="8 25 8 1 0 1 0 33 3 33 8 33 16 33 16 25 8 25"/>
                        <path d="M35,0A17,17,0,1,0,52,17,17,17,0,0,0,35,0Zm0,26a9,9,0,1,1,9-9A9,9,0,0,1,35,26Z"/>
                        <path d="M109,0a17,17,0,1,0,17,17A17,17,0,0,0,109,0Zm0,26a9,9,0,1,1,9-9A9,9,0,0,1,109,26Z"/>
                        <path d="M88.95,16H72v6h7.4824a9,9,0,1,1,0-10H88.25A17.0052,17.0052,0,1,0,89,17C89,16.6624,88.9689,16.3327,88.95,16Z"/>
                    </g>
                </svg>
            </Link>

        </div>

        {collapseShow && (
        
        <nav className="primary-nav__menu display-block" id="main-menu" aria-label="Main Menu">

            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="#1">Link</Link>
                </li>
                <li>
                    <button data-toggle="dropdown">Dropdown</button>
                    <ul className="nav__dropdown box-shadow-1--lg">
                        <li>
                            <Link to="#1">One</Link>
                        </li>
                        <li>
                            <Link to="#1">Two</Link>
                        </li>
                        <li>
                            <Link to="#1">Link</Link>
                        </li>
                    </ul>
                </li>
            </ul>

        </nav>
        
        )}

        <div className="primary-nav__toggle">
            
            <button
                ref={collapseButtonRef}
                onClick={handleClick}
                className="button button--icon-only mobile-menu-toggle"
                title="Menu"
                aria-expanded={collapseShow ? true : false}>
                <span className={`icon ${collapseShow ? 'icon-close' : 'icon-menu'}`} aria-hidden="true"></span>
            </button>
            
        </div>

        <div className="primary-nav__actions">

            <button
                className="button button--icon-only"
                aria-label="Language">
                    <span className="icon icon-language"></span>
            </button>

        </div>

    </div>
  )
}

export default Header;