import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {
	return (
		<header className="appHeader">
			<nav>
				<Link className="logo" to="/">PrimeFlix</Link>
				<Link className="favorites" to="/favorites">Meus Filmes</Link>
			</nav>
		</header>
	)
}
