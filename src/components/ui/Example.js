import { useParams } from 'react-router-dom';

import Accordion from '../natura11y/accordion/Accordion'
import AlertParent from '../natura11y/alerts/AlertParent';
import Backdrop from '../natura11y/backdrop/Backdrop.js';
import PrimaryNavigation from '../natura11y/navigation/PrimaryNavigation';
import ModalParent from '../natura11y/modal/ModalParent';

const Example = ({ data }) => {

	const { slug } = useParams();

	const activeExample = () => {

		switch (slug) {

			case 'accordion':
				return (
					<div className='narrow margin-x-auto'>
						<Accordion />
					</div>
				);

			case 'alerts':
				return (
					<div className='narrow margin-x-auto'>
						<AlertParent />
					</div>
				);

			case 'backdrop':
				return (
					<div className='medium margin-x-auto'>
						<Backdrop />
					</div>
				);

			case 'navigation':
				return (
					<div className='box-shadow-1 theme-light'>
						<PrimaryNavigation />
					</div>
				);

			case 'modal':
				return (
					<div className='narrow margin-x-auto'>
						<ModalParent />
					</div>
				);

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

					<div className="margin-y-5">
						{activeExample()}
					</div>
			</div>
		</div>
	);
};

export default Example;