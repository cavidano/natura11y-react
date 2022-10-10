/*

// Accordion

*/

import React, { useState, useEffect } from 'react';

import AccordionItem from './AccordionItem';

const Accordion = () => {

  const data = [
		{
			title: 'Danaus Plexippus',
			content: (
				<p>
					The monarch butterfly or simply monarch is a milkweed butterfly in the
					family Nymphalidae. Other common names, depending on region, include
					milkweed, common tiger, wanderer, and black veined brown. It may be
					the most familiar <a href='#1'>North American</a> butterfly, and is
					considered an iconic pollinator species.
				</p>
			),
		},
		{
			title: 'Papilio Polyxenes',
			content: (
				<p>
					The black swallowtail, American swallowtail, or parsnip swallowtail,
					is a butterfly found throughout much of <a href='#1'>North America</a>
					. It is the state butterfly of Oklahoma and New Jersey.
				</p>
			),
		},
		{
			title: 'Hyalophora Cecropia',
			content: (
				<p>
					The cecropia moth is <a href='#1'>North America's</a> largest native
					moth. It is a member of the family Saturniidae, or giant silk moths.
					Females have been documented with a wingspan of five to seven inches
					or more.
				</p>
			),
		},
		{
			title: 'Deilephila Elpenor',
			content: (
				<p>
					The elephant hawk moth or large elephant hawk moth, is a moth in the
					family Sphingidae. Its common name is derived from the caterpillar's
					resemblance to an elephant's trunk. It is most common in
					<a href='#1'>central Europe</a> and is distributed throughout the
					Palearctic region.
				</p>
			),
		},
		{
			title: 'Papilio Troilus',
			content: (
				<p>
					The spicebush swallowtail or green-clouded butterfly, is a common
					black swallowtail butterfly found in <a href='#1'>North America</a>.
					It has two subspecies, Papilio troilus troilus and Papilio troilus
					ilioneus, the latter found mainly in the Florida peninsula.
				</p>
			),
		},
	];

  const [openAccordion, setOpenAccordion] = useState(null);


  const handleClick = (e) => {

    const clicked = e.target.getAttribute('id');

      openAccordion === clicked
        ? setOpenAccordion(null)
        : setOpenAccordion(clicked);
  }

	const accordionItems = data.map((item, index) => (
		
    <AccordionItem
        title={item.title}
        openAccordion={openAccordion}
        handleClick={handleClick}
        id={`example-${index}`}
        key={index}
      >

        {item.content}

      </AccordionItem>
	));

  return (

    <div className='accordion'>

      {accordionItems}
      
    </div>
    
  );

}

export default Accordion;