import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from "./components/global/Header";
import Home from './components/Home';
import About from './components/About';

import './natura11y';

const App = () => {

  return (
		<BrowserRouter>
			<Header />

			<main className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;