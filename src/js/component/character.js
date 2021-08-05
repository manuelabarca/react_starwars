import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
	const { id } = useParams();

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacter(id);
	}, []);

	return (
		<div>
			{store.character !== null ? <h1>Personaje: {store.character.name} </h1> : null}

			{store.error !== null && store.character == null ? <h3>{store.error}</h3> : null}
		</div>
	);
};
