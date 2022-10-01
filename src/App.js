import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/global/Header";
import Home from './components/Home';
import About from './components/About';
import Examples from './components/Examples';

const App = () => {

  return (
		<BrowserRouter>
			
			<Header />

			<main className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/examples/' element={<Examples />} />
				</Routes>
			</main>

		</BrowserRouter>
	);
}

export default App;