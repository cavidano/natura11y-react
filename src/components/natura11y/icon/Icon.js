import React from 'react';

const Icon = ({iconHandle = 'home'}) => {
	return (
        <span
            className={`icon icon-${iconHandle}`} 
            aria-hidden='true'>
        </span>
    );
};

export default Icon;