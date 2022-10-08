import React, { useRef, useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

const Dropdown = () => {

  const dropdownButtonRef = useRef();
  const dropdownMenuRef = useRef();

  const [dropdownShow, setDropdownShow] = useState(false);

  const location = useLocation();

    useEffect(() => {

        let dropdownButtonParent = dropdownButtonRef.current.closest('li');

        const dropdownClickListener = (e) => {
        
            let dropdownButtonClick = dropdownButtonParent.contains(e.target);

            if (!dropdownButtonClick) {
                setDropdownShow(false);
            }
        } 

        window.addEventListener('click', dropdownClickListener);

        return () => {
            window.removeEventListener('click', dropdownClickListener);
        }

    }, []);

    useEffect(() => {
        setDropdownShow(false);
    }, [location]);

    const handleClick = () => {
        setDropdownShow(!dropdownShow);
    }

    return (
        <>
            <button
                ref={dropdownButtonRef}
                data-toggle="dropdown"
                aria-expanded={dropdownShow ? true : false}
                onClick={handleClick}>
                    Dropdown
            </button>

            <ul
                ref={dropdownMenuRef}
                className={`nav__dropdown box-shadow-1--lg ${dropdownShow ? 'shown' : ''}`}>
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

        </>
    );
}

export default Dropdown;