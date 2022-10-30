import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import classNames from 'classnames';

import './natura11yStyles/scss/natura11y.scss';

import Header from './_uiComponents/Header';
import Home from './_uiComponents/Home';
import Example from './_uiComponents/Example';

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
			title: 'Button',
			slug: 'button'
		},
		{
			title: 'Form',
			slug: 'form'
		},
		{
			title: 'Icon',
			slug: 'icon'
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

			<main className={classNames('container', 'wide')}>
				<Routes>
					<Route path='/' element={<Home data={data} />}>
						<Route path=':slug' element={<Example data={data} />} />
					</Route>
				</Routes>
			</main>

		</Router>
	);
}

export default App;