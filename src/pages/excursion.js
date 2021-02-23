import React from 'react';
import { Link } from 'react-router-dom';

function Excursion(props) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/rooms">Room</Link>
					</li>
					<li>
						<Link to="/excursion">Excursion</Link>
					</li>
				</ul>
			</nav>
			<h1>Excursion</h1>
		</div>
	);
}

export default Excursion;
