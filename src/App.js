import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Room from './pages/room';
import Excursion from './pages/excursion';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/rooms">
					<Room />
				</Route>
				<Route exact path="/excursion">
					<Excursion />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
