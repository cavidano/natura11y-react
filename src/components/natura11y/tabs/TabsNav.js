import React from 'react';

const TabsNav = ( props ) => {

    const { 
        data,
        breakpoint = 'md',
        activeTab,
        handleClick = handleClick
    } = props;

	const tabButtons = data.map((button, index) => (
		<li key={index}>        
            <button
                id={`tab-button-example-${index}`}
                aria-controls={`tab-panel-example-${index}`}
                aria-selected={activeTab === button.title ? true : false}
                onClick={handleClick}
                data-title={button.title}
                role='tab'
            >
                {button.title}
            </button>
        </li>
	));

	return (
		<ul className='tabs-nav tabs-nav--horizontal'>
			{tabButtons}
		</ul>
	);
};

export default TabsNav;