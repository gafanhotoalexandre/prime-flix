import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

import { api } from "../../services/api";
import { MovieType } from "../../types/Movie";

import './Movie.css';

export function Movie() {

	const { id: movieId } = useParams();
	const navigate = useNavigate();

	const [movie, setMovie] = useState<MovieType>();
	const [loadingMovie, setLoadingMovie] = useState(true);

	useEffect(() => {
		async function loadMovie() {
			await api.get(`movie/${movieId}`, {
				params: {
					api_key: import.meta.env.VITE_API_KEY,
					language: 'pt-BR'
				}
			}).then((response) => {
				setMovie(response.data);
				setLoadingMovie(false);
			}).catch(() => {
				console.log('FILME NÃO ENCONTRADO!');
				navigate('/', { replace: true });
				return;
			});

		}
		loadMovie();

		return () => {
			console.log('Componente foi desmontado');
		}
	}, [movieId, navigate]);

	function saveMovie() {
		const myMovieList = localStorage.getItem('@primeFlix');
		let savedMovies: MovieType[] = JSON.parse(String(myMovieList)) || [];

		const hasMovie = savedMovies.some(savedMovie => savedMovie.id === movie?.id);

		if (hasMovie) {
			toast.warn('Este filme já está na sua lista.');
			return;
		}

		savedMovies.push(movie!);
		localStorage.setItem('@primeFlix', JSON.stringify(savedMovies));

		toast.success('Filme salvo com sucesso!');
	}

	if (loadingMovie) {
		return (
			<div className="movie-info">
				<h1>Carregando detalhes...</h1>
			</div>
		)
	}

	return (
		<div className="movie-info">
			<h1>{movie?.title}</h1>
			<img
				src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
				alt={movie?.title}
			/>
			<h3>Sinopse:</h3>
			<span>{movie?.overview}</span>

			<strong>Avaliação: {movie?.vote_average.toFixed(1)} / 10</strong>

			<div className="area-buttons">
				<button onClick={saveMovie} >Salvar</button>
				<button>
					<a
						href={`https://youtube.com/results?search_query=${movie?.title} Trailer`}
						rel="external"
						target="_blank"
					>Trailer</a>
				</button>
			</div>
		</div>
	);
}
