import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import Accordion from '../natura11y-components/accordion/Accordion';
import AlertParent from '../natura11y-components/alerts/AlertParent';

const Example = ({ data }) => {
	const { slug } = useParams();

	const activeExample = () => {
		switch (slug) {
			case 'accordion':
				return <Accordion />;
			case 'alerts':
				return <AlertParent />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className='container narrow margin-y-5'>
				{data
					.filter((card) => card.slug === slug)
					.map((card, index) => (
						<div className='container'>{card.title}</div>
					))}

				{activeExample()}
			</div>
		</div>
	);
};

export default Example;
