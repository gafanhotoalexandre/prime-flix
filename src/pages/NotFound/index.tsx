import { Link } from "react-router-dom";

import './NotFound.css';

export function NotFound() {
	return (
		<div className="not-found">
			<h1>404</h1>
			<h2>Página não encontrada...</h2>
			<Link to="/">Veja todos os filmes!</Link>
		</div>
	);
}
