import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = forwardRef(({ 
    items = [
        { to: '#1', label: 'One' },
        { to: '#2', label: 'Two' },
        { to: '#3', label: 'Three' }
    ],
    ...props 
}, ref) => {

    return (
        <ul
            ref={ref}
            className="nav__dropdown box-shadow-1--lg"
            role="menu"
            aria-hidden="true"
            {...props}
        >
            {items.map((item, index) => (
                <li key={index} role="menuitem">
                    <Link to={item.to}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );
});

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;