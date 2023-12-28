import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import MainApp from './pages/MainApp';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='MainApp' element={<MainApp />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</>
	);
}

export default App;
