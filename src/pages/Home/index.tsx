import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { MovieType } from "../../types/Movie";

import './Home.css';

export function Home() {
	const [listMoviesShowing, setListMoviesShowing] = useState<MovieType[]>([]);
	const [isLoadingMovies, setIsLoadingMovies] = useState(true);

	useEffect(() => {
		async function loadMoviesShowing() {
			setIsLoadingMovies(true);
			try {
				const response = await api.get('movie/now_playing', {
					params: {
						api_key: import.meta.env.VITE_API_KEY,
						language: 'pt-BR',
						page: 1
					}
				});
				setListMoviesShowing(response.data.results.slice(0, 10));
				setIsLoadingMovies(false);
			} catch (error) {
				console.warn(error)
			}
		}
		loadMoviesShowing();
	}, []);

	if (isLoadingMovies) {
		return (
			<div className="loading">
				<h2>Carregando...</h2>
			</div>
		);
	}

	return (
		<main className="container">
			<div className="movie-list">
				{listMoviesShowing.map(movie => (
					<article key={movie.id}>
						<strong>{movie.title}</strong>
						<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
						<Link to={`/filme/${movie.id}`}>Acessar</Link>
					</article>
				))}
			</div>
		</main>
	);
}
