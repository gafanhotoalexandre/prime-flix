import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MovieType } from "../../types/Movie";

import './Favorites.css';

export function Favorites() {
	const [favoriteMovies, setFavoriteMovies] = useState<MovieType[]>();

	useEffect(() => {
		const myMovieList = localStorage.getItem('@primeFlix');
		setFavoriteMovies(JSON.parse(String(myMovieList)) || [])
	}, []);

	function handleRemoveMovie(id: number) {
		if (!confirm('Tem certeza?')) return;

		const filteredMovies = favoriteMovies?.filter(movie => movie.id !== id);

		setFavoriteMovies(filteredMovies);
		localStorage.setItem('@primeFlix', JSON.stringify(filteredMovies));

		toast.success('Filme removido com sucesso!');
	}

	return (
		<div className="my-movies">
			<h1>Meus Filmes</h1>

			{favoriteMovies?.length === 0 && (
				<span>Você não possui nenhum filme salvo :(</span>
			)}
			<ul>
				{favoriteMovies?.map(movie => (
					<li key={movie.id}>
						<span>{movie.title}</span>

						<div>
							<Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
							<button onClick={() => handleRemoveMovie(movie.id)}>Remover</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
