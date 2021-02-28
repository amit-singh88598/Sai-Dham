import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Room from "./pages/room";
import Excursion from "./pages/excursion";
import Header from "./layouts/header";
import Service from "./pages/service";
import Loco from "./pages/loco";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rooms">
          <Room />
        </Route>
        <Route path="/excursion">
          <Excursion />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/loco/:id">
          <Loco />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
