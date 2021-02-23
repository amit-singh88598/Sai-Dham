import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
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
			<hi>Home</hi>
		</div>
	);
}

export default Home;
