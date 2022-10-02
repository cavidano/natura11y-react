import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import Accordion from '../natura11yComponents/accordion/Accordion';
import AlertParent from '../natura11yComponents/alerts/AlertParent';

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
					.filter((header) => header.slug === slug)
					.map((header) => (
						<div className='container'>{header.title}</div>
					))}

				{activeExample()}
			</div>
		</div>
	);
};

export default Example;
