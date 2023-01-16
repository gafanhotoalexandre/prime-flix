import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Movie } from "../../types/Movie";

export function Home() {
	const [listMoviesShowing, setListMoviesShowing] = useState<Movie[]>([]);

	useEffect(() => {
		async function loadMoviesShowing() {
			const response = await api.get('movie/now_playing', {
				params: {
					api_key: import.meta.env.VITE_API_KEY,
					language: 'pt-BR',
					page: 1
				}
			});
			setListMoviesShowing(response.data.results.slice(0, 10));

		}

		loadMoviesShowing();
	}, []);

	return (
		<main className="container">
			<div className="movie-list">
				{listMoviesShowing.map(movie => (
					<p>{movie.title}</p>
				))}
			</div>
		</main>
	);
}
