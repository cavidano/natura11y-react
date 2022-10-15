import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/ui/Header';
import About from './components/ui/About';
import Home from './components/ui/Home';
import Example from './components/ui/Example';

const App = () => {

	const data = [
	
		{
			title: 'Accordion',
			slug: 'accordion'
		},
		{
			title: 'Alert',
			slug: 'alert'
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
		{
			title: 'Tab',
			slug: 'tab'
		},
		{
			title: 'Table',
			slug: 'table'
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