import Backdrop from './Backdrop/Backdrop';

const Home = () => {

	const componentData = [
		{
			title: 'Accordion',
			slug: 'accordion'
		},
		{
			title: 'Alerts',
			slug: 'alerts'
		},
		{
			title: 'Backdrops',
			slug: 'backdrops'
		},
		{
			title: 'Modal',
			slug: 'modal'
		},
		{
			title: 'Navigation',
			slug: 'navigation'
		},
	];

	const componentList = componentData.map((component, index) => (
		<Backdrop
			key={index}
			title={component.title}
			imageURL={`images/banner/${component.slug}.jpg`}
			fixedHeight="200px"
			slug={component.slug}

		/>
	));

	return (
		<>
			<div className='container medium padding-y-4'>
				{componentList}
			</div>
		</>
	);
};

export default Home;
