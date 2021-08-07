import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export const Pokemon = () => {
	const { pokemon_url } = useParams();

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		fetch(decodeURIComponent(pokemon_url), {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => setPokemon(data));
	}, []);

	return (
		<>
			{!!pokemon && (
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<h1>{pokemon.name}</h1>

					<img src={pokemon.sprites.front_default} />
					<img src={pokemon.sprites.back_default} />
				</div>
			)}
		</>
	);
};
