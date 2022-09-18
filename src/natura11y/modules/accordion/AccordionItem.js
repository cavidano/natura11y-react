import React, { useEffect, useRef } from 'react';

const AccordionItem = ( props ) => {

    const {
        title = 'Accordion Header',
        children = (<p>Accordion Content</p>),
        activeAccordion = null,
        handleClick = handleClick,
        idSuffix
    } = props;

    useEffect(() => {

        const currentPanel = accordionPanelRef.current;

        activeAccordion === idSuffix ?
            currentPanel.style.maxHeight = currentPanel.scrollHeight + 'px'
            : currentPanel.style.maxHeight = 0;

    }, [activeAccordion]);

    const accordionButtonRef = useRef();
    const accordionPanelRef = useRef();

    return (
        <>
            <button
                className='accordion__button h5'
                ref={accordionButtonRef}
                id={`${idSuffix}`}
                data-accordion='button'
                aria-controls='acc-panel-example-01'
                aria-expanded={activeAccordion === idSuffix ? true : false}
                onClick={handleClick}
            >
                {title}
            </button>

            <div
                className={`accordion__panel ${activeAccordion === idSuffix ? 'shown' : ''}`}
                ref={accordionPanelRef}
                id='acc-panel-example-01'
                data-accordion='panel'
                aria-labelledby='acc-button-example-01'
                role='region'
            >
                <div className='accordion__panel__content'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default AccordionItem;