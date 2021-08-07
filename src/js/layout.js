import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Character } from "./component/character";
import { Pokedex } from "./views/pokedex";
import { Pokemon } from "./views/pokemon";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const movies = [
		{
			id: 1,
			title: "Toy Story",
			year: 1995
		},
		{
			id: 2,
			title: "Bichos",
			year: 1996
		},
		{
			id: 3,
			title: "Monster inc",
			year: 2000
		},
		{
			id: 4,
			title: "Los increibles"
		}
	];

	return (
		<div className="d-flex flex-column">
			<Router basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home movies={movies} title="Pantalla de home" />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/character/:id">
							<Character />
						</Route>
						<Route exact path="/pokedex">
							<Pokedex />
						</Route>
						<Route path="/pokemon/:pokemon_url">
							<Pokemon />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</Router>
		</div>
	);
};

export default injectContext(Layout);
