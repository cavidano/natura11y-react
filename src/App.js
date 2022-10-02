import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/global/Header";
import Home from './components/Home';
import About from './components/About';
import Examples from './components/Examples';
import Example from './components/Example';

const App = () => {

	const data = [
	
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

  	return (
		<Router>
			
			<Header />

			<main className='App'>
				<Routes>
					<Route path='/' element={<Home data={data} />} />
					<Route path='/examples' element={<Examples data={data} />}>
						<Route path=':slug' element={<Example data={data} />} />
					</Route>
					<Route path='/about' element={<About />} />
				</Routes>
			</main>

		</Router>
	);
}

export default App;