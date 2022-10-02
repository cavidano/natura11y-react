/*

// Example

*/

import { useParams, Outlet } from 'react-router-dom';
import Preview from './ui/Preview';

const Examples = ({ data }) => {

	const { slug } = useParams();

	const exampleLinks = data.map((component, index) => (
		<Preview
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
			{slug === undefined
				? (
					<div className="grid grid--column-3--md">
						{exampleLinks}
					</div>
				) : <Outlet data={data} id={slug} />
			}
		</>
	);
};

export default Examples;