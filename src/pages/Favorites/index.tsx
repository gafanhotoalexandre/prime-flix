import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieType } from "../../types/Movie";

import './Favorites.css';

export function Favorites() {
	const [favoriteMovies, setFavoriteMovies] = useState<MovieType[]>();

	useEffect(() => {
		const myMovieList = localStorage.getItem('@primeFlix');
		setFavoriteMovies(JSON.parse(String(myMovieList)) || [])
	}, []);

	return (
		<div className="my-movies">
			<h1>Meus Filmes</h1>

			<ul>
				{favoriteMovies?.map(movie => (
					<li key={movie.id}>
						<span>{movie.title}</span>

						<div>
							<Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
							<button>Remover</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
