import { useParams } from 'react-router-dom';

import Accordion from '../natura11yComponents/accordion/Accordion';
import AlertParent from '../natura11yComponents/alerts/AlertParent';
import Backdrop from '../natura11yComponents/backdrops/Backdrop';
import PrimaryNavigation from '../natura11yComponents/navigation/PrimaryNavigation';
import ModalParent from '../natura11yComponents/modal/ModalParent';

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

			case 'backdrops':
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
					<div className='medium margin-x-auto'>
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