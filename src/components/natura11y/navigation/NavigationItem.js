import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFocusableElements } from 'natura11y/src/js/utilities/focus';
import { handleArrowKeyNavigation } from 'natura11y/src/js/utilities/keyboardNavigation';

const NavigationItem = ({ 
    title,
    to = null, // Optional page link
    items = [], // Dropdown items
    isMegaMenu = false, // Is this a mega menu?
    hover = false, // Enable hover functionality
    breakpoint = 'lg'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef();
    const menuRef = useRef();
    const location = useLocation();
    
    const menuId = `nav-menu-${Math.random().toString(36).substr(2, 9)}`;

    // Close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!buttonRef.current?.closest('li')?.contains(e.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    // Hover functionality
    const handleMouseEnter = () => {
        if (hover) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (hover) {
            // Add delay for mega menus to prevent accidental closing
            const delay = isMegaMenu ? 500 : 0;
            setTimeout(() => {
                setIsOpen(false);
            }, delay);
        }
    };

    // Combined keyboard navigation handler
    const handleMenuKeyDown = (e) => {
        // Handle tab navigation through dropdown items
        if (e.key === 'Tab') {
            const focusableElements = getFocusableElements(menuRef.current);
            const currentIndex = focusableElements.findIndex(el => el === document.activeElement);
            
            // If tabbing forward from last item or backward from first item
            if ((e.shiftKey && currentIndex === 0) || (!e.shiftKey && currentIndex === focusableElements.length - 1)) {
                e.preventDefault();
                setIsOpen(false);
                
                // Find the next/previous top-level navigation item
                const currentLi = buttonRef.current?.closest('li');
                if (currentLi) {
                    if (e.shiftKey) {
                        // Tab backward - focus previous navigation item
                        const prevLi = currentLi.previousElementSibling;
                        if (prevLi) {
                            const prevButton = prevLi.querySelector('button, a');
                            prevButton?.focus();
                        }
                    } else {
                        // Tab forward - focus next navigation item
                        const nextLi = currentLi.nextElementSibling;
                        if (nextLi) {
                            const nextButton = nextLi.querySelector('button, a');
                            nextButton?.focus();
                        }
                    }
                }
                return;
            }
        }

        // Handle other keyboard navigation (arrows, escape, etc.)
        if (!isOpen) return;

        const focusableElements = getFocusableElements(menuRef.current);
        const currentIndex = focusableElements.findIndex(el => el === document.activeElement);

        switch (e.code) {
            case 'Escape':
                setIsOpen(false);
                buttonRef.current?.focus();
                break;
            
            case 'ArrowDown':
            case 'ArrowUp':
            case 'Home':
            case 'End':
                handleArrowKeyNavigation(
                    e, 
                    currentIndex, 
                    focusableElements, 
                    (targetIndex) => focusableElements[targetIndex]?.focus()
                );
                break;
            
            default:
                // do nothing
        }
    };

    // Simple link - no dropdown
    if (to && (!items || items.length === 0)) {
        return (
            <li>
                <Link to={to}>{title}</Link>
            </li>
        );
    }

    // Button dropdown - button that opens menu
    if (!to && (items || items.length > 0)) {
        return (
            <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    ref={buttonRef}
                    data-toggle="dropdown"
                    data-hover={hover ? 'true' : undefined}
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    aria-haspopup="menu"
                    onClick={handleButtonClick}
                >
                    {title}
                </button>
                
                {isMegaMenu ? (
                    <div
                        ref={menuRef}
                        id={menuId}
                        className={`mega-menu mega-menu--${breakpoint} ${isOpen ? 'shown' : ''}`}
                        role="menu"
                        aria-hidden={!isOpen}
                        onKeyDown={handleMenuKeyDown}
                    >
                        {items}
                    </div>
                ) : (
                    <ul
                        ref={menuRef}
                        id={menuId}
                        className={`nav__dropdown ${isOpen ? 'shown' : ''}`}
                        role="menu"
                        aria-hidden={!isOpen}
                        onKeyDown={handleMenuKeyDown}
                    >
                        {Array.isArray(items) ? items.map((item, index) => (
                            <li key={index} role="menuitem">
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        )) : items}
                    </ul>
                )}
            </li>
        );
    }

    // Link + dropdown button - link for navigation + button for dropdown
    if (to && (items || items.length > 0)) {
        return (
            <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="nav-link-dropdown">
                    <Link to={to}>{title}</Link>
                    <button
                        ref={buttonRef}
                        data-toggle="dropdown"
                        aria-expanded={isOpen}
                        aria-controls={menuId}
                        aria-haspopup="menu"
                        onClick={handleButtonClick}
                    >
                        <span className="caret"></span>
                    </button>
                </div>
                
                {/* Dropdown menu goes outside the nav-link-dropdown wrapper */}
                {isMegaMenu ? (
                    <div
                        ref={menuRef}
                        id={menuId}
                        className={`mega-menu mega-menu--${breakpoint} ${isOpen ? 'shown' : ''}`}
                        role="menu"
                        aria-hidden={!isOpen}
                        onKeyDown={handleMenuKeyDown}
                    >
                        {items}
                    </div>
                ) : (
                    <ul
                        ref={menuRef}
                        id={menuId}
                        className={`nav__dropdown ${isOpen ? 'shown' : ''}`}
                        role="menu"
                        aria-hidden={!isOpen}
                        onKeyDown={handleMenuKeyDown}
                    >
                        {Array.isArray(items) ? items.map((item, index) => (
                            <li key={index} role="menuitem">
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        )) : items}
                    </ul>
                )}
            </li>
        );
    }

    // Fallback - simple link
    return (
        <li>
            <Link to={to || '#'}>{title}</Link>
        </li>
    );
};

export default NavigationItem;
