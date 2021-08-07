import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Pokedex = () => {
	let { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPokemons();
	}, []);
	return (
		<>
			<ul>
				{store.pokemons.length > 0
					? store.pokemons.map((pokemon, key) => (
							<Link key={key} to={`/pokemon/${encodeURIComponent(pokemon.url)}`}>
								<li>{pokemon.name}</li>
							</Link>
					  ))
					: null}
			</ul>
		</>
	);
};
