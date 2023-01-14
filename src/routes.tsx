import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { NotFound } from './pages/NotFound';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/filme/:id" element={<Movie />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
