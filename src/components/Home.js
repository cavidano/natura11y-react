import Backdrop from "./Backdrop/Backdrop";

const Home = () => {
	return (
		<>
			<div
				className="container padding-y-4 grid grid--column-3--lg gap-1" style={{'--backdrop-fixed-height': '700px'}
				}>

				<Backdrop
					title="Accordion"
					imageURL='images/banner/accordion.jpg'
					fixedHeight={true}
				/>

				<Backdrop
					title="Alerts"
					imageURL='images/banner/alerts.jpg'
					fixedHeight={true}
				/>

				<Backdrop
					title="Backdrops"
					imageURL='images/banner/backdrops.jpg'
					fixedHeight={true}
				/>
			
			</div>
		</>
	);
};

export default Home;