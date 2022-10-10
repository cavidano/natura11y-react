/*

// Accordion

*/

import React, { useState, useEffect } from 'react';

import { getFocusableElements } from '../../utilities/focus';

import AccordionItem from './AccordionItem';

const Accordion = () => {

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleClick = (e) => {

    const clicked = e.target.getAttribute('id');

      openAccordion === clicked
        ? setOpenAccordion(null)
        : setOpenAccordion(clicked);
  }

  useEffect(() => {
			const focusableElements = getFocusableElements();
  }, []);

  return (

    <div className='accordion'>

      <AccordionItem
        title='Danaus Plexippus'
        openAccordion={openAccordion}
        handleClick={handleClick}
        id='example-01'
      >

        <p>
            The monarch butterfly or simply monarch is a milkweed butterfly in
            the family Nymphalidae. Other common names, depending on region,
            include milkweed, common tiger, wanderer, and black veined brown. It
            may be the most familiar <a href='#1'>North American</a> butterfly,
            and is considered an iconic pollinator species.
        </p>

      </AccordionItem>

      <AccordionItem
        title='Papilio Polyxenes'
        openAccordion={openAccordion}
        handleClick={handleClick}
        id='example-02'
      >

        <p>
            The monarch butterfly or simply monarch is a milkweed butterfly in
            the family Nymphalidae. Other common names, depending on region,
            include milkweed, common tiger, wanderer, and black veined brown. It
            may be the most familiar <a href='#1'>North American</a> butterfly,
            and is considered an iconic pollinator species.
        </p>

      </AccordionItem>

      <AccordionItem
        title='Hyalophora Cecropia'
        openAccordion={openAccordion}
        handleClick={handleClick}
        id='example-03'
      >

        <p>
            The monarch butterfly or simply monarch is a milkweed butterfly in
            the family Nymphalidae. Other common names, depending on region,
            include milkweed, common tiger, wanderer, and black veined brown. It
            may be the most familiar <a href='#1'>North American</a> butterfly,
            and is considered an iconic pollinator species.
        </p>

      </AccordionItem>
      
    </div>
    
  );

}

export default Accordion;