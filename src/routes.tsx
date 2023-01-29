import { Routes, Route } from 'react-router-dom'
import { Favorites } from './pages/Favorites';

import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { NotFound } from './pages/NotFound';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/filme/:id" element={<Movie />} />
			<Route path="/favoritos" element={<Favorites />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
