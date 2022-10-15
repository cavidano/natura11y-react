import { useParams } from 'react-router-dom';

import Accordion from '../natura11y/accordion/Accordion'

import AlertParent from '../natura11y/alert/AlertParent';

import Backdrop from '../natura11y/backdrop/Backdrop.js';

import ButtonIconOnly from '../natura11y/button/ButtonIconOnly';

import Button from '../natura11y/button/Button';

import PrimaryNavigation from '../natura11y/navigation/PrimaryNavigation';

import ModalParent from '../natura11y/modal/ModalParent';

import Tabs from '../natura11y/tab/Tabs';

import TableScroll from '../natura11y/table/TableScroll';

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

			case 'alert':
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

			case 'button':
				return (
					<>
						<div className='medium margin-x-auto button-group justify-content-center margin-y-3'>
							<ButtonIconOnly />
							<ButtonIconOnly iconHandle='settings' />
							<ButtonIconOnly iconHandle='bell' />
							<ButtonIconOnly iconHandle='calendar' />
						</div>
						<div className='medium button-group font-size-xl justify-content-center margin-x-auto margin-y-3 align-content-center'>
							<Button iconHandle='home' utilityClasses='theme-light border-radius-pill' />
							<Button iconHandle='bell' title='Notifications' />
							<Button outline={true} title='Settings' />
						</div>
					</>
				);

			case 'modal':
				return (
					<div className='narrow margin-x-auto'>
						<ModalParent />
					</div>
				);

			case 'navigation':
				return (
					<div className='box-shadow-1 theme-light'>
						<PrimaryNavigation />
					</div>
				);

			case 'tab':
				return (
					<div className='medium margin-x-auto'>
						<Tabs />
					</div>
				);

			case 'table':
				return (
					<div className='wide margin-x-auto'>
						<TableScroll />
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