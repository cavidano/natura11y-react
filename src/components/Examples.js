/*

// Example

*/

import { useParams, Outlet } from 'react-router-dom';
import Backdrop from './Backdrop/Backdrop';

import Accordion from '../natura11y-components/accordion/Accordion';

const Examples = ({ data }) => {
	const { slug } = useParams();

	const exampleLinks = data.map((component, index) => (
		<Backdrop
			key={index}
			title={component.title}
			imageURL={`images/banner/${component.slug}.jpg`}
			fixedHeight='300px'
			slug={component.slug}
		/>
	));

	return (
		<>
			<h1 className='screen-reader-only'>Component Examples</h1>
			{slug === undefined ? exampleLinks : <Outlet data={data} id={slug} />}
		</>
	);
};

export default Examples;