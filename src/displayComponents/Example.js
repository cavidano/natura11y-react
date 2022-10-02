import { useParams } from 'react-router-dom';

import Accordion from '../natura11yComponents/accordion/Accordion';
import AlertParent from '../natura11yComponents/alerts/AlertParent';
import Backdrop from '../natura11yComponents/backdrops/Backdrop.js';

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
			<div className=''>
				{data
					.filter((header) => header.slug === slug)
					.map((header, index) => (
						<Backdrop
							key={index}
							title={header.title}
							fixedHeight='400px'
							imageURL={`images/banner/${header.slug}.jpg`}
						/>						
					))}

					<div className="container narrow margin-y-5">
						{activeExample()}
					</div>

			</div>
		</div>
	);
};

export default Example;