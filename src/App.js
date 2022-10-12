import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './displayComponents/ui/Header';
import About from './displayComponents/About';
import Home from './displayComponents/Home';
import Example from './displayComponents/Example';

const App = () => {

	const data = [
	
		{
			title: 'Accordion',
			slug: 'accordion'
		},
		{
			title: 'Alert',
			slug: 'alerts'
		},
		{
			title: 'Backdrop',
			slug: 'backdrop'
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

			<main className='container wide'>
				<Routes>
					<Route path='/' element={<Home data={data} />}>
						<Route path=':slug' element={<Example data={data} />} />
					</Route>
					<Route path='/about' element={<About />} />
				</Routes>
			</main>

		</Router>
	);
}

export default App;