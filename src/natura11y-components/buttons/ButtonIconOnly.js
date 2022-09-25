/*

// Button

*/

import { Link } from 'react-router-dom';

const ButtonIconOnly = ( props ) => {

    const {
        tag = 'button',
        iconClassSuffix = 'home',
        ariaLabel = null,
        clickHandler = null
    } = props;

    const buttonIcon = <span className={`icon icon-${iconClassSuffix}`} aria-hidden='true'></span>;

    let button;

			if (tag === 'button') {
				button = (
					<button
						className='button button--icon-only'
						onClick={clickHandler}
						aria-label={ariaLabel}
					>
					{buttonIcon}
					</button>
				);
			} else if (tag === 'link') {
				button = (
					<Link
						className='button button--icon-only'
						to='#1'
						aria-label={ariaLabel}
					>
					{buttonIcon}
					</Link>
				);
			}
    
    return button;
};

export default ButtonIconOnly;
