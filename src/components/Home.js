import Backdrop from "./Backdrop/Backdrop";

const Home = () => {
	return (
		<>
			<div className="container medium padding-y-4">

				<Backdrop
					title="Accordion"
					imageURL='images/banner/accordion.jpg'
					fixedHeight={900}
				/>

				<Backdrop
					title="Alerts"
					imageURL='images/banner/alerts.jpg'
					fixedHeight={300}
				/>

				<Backdrop
					title="Backdrops"
					imageURL='images/banner/backdrops.jpg'
					fixedHeight={300}
				/>
			
			</div>
		</>
	);
};

export default Home;