import React, { useEffect, useRef } from 'react';


import { getFocusableElements } from '../../utilities/focus';

const AccordionItem = ( props ) => {

    const {
        title = 'Accordion Header',
        children = (<p>Accordion Content</p>),
        openAccordion = null,
        handleClick = handleClick,
        id
    } = props;

    const accordionButton = useRef();
    const accordionPanel = useRef();

    useEffect(() => {

        openAccordion === id
            ? accordionPanel.current.style.maxHeight = accordionPanel.current.scrollHeight + 'px'
            : accordionPanel.current.style.maxHeight = 0;
            
        const focusableElements = getFocusableElements(accordionPanel.current);
        console.log(`focasable ${focusableElements}`)
    }, [openAccordion]);


    useEffect(() => {
    }, []);


    return (
        <>
            <button
                className='accordion__button h5'
                ref={accordionButton}
                id={`${id}`}
                data-accordion='button'
                aria-controls='acc-panel-example-01'
                aria-expanded={openAccordion === id ? true : false}
                onClick={handleClick}
            >
                {title}
            </button>

            <div
                className={`accordion__panel ${openAccordion === id ? 'shown' : ''}`}
                ref={accordionPanel}
                id={`acc-panel-${id}`}
                data-accordion='panel'
                aria-labelledby={`${id}`}
                aria-hidden={openAccordion === id ? true : false}
                role='region'
            >
                <div className='accordion__panel__content'>
                    {children}
                </div>
                
            </div>
        </>
    );

};

export default AccordionItem;