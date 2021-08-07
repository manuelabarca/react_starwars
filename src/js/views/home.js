import React, { useState } from "react";
import PropTypes from "prop-types";

export const Home = props => {
	const [color, setColor] = useState(null);

	let name = "BRYAN";
	let age = 25;

	let description = `Mi nombre es ${name} y mi edad es ${age} `;

	const getYear = year => {
		if (year !== undefined) {
			alert(`Me estrene en el año ${year}`);
		} else {
			alert("No se encontro información de estreno");
		}
	};

	return (
		<>
			<h1>{props.title}</h1>
			<div>{name}</div>
			<div>{description}</div>
			<ul>
				{props.movies.length > 0 ? (
					props.movies.map(movie => (
						<li onClick={() => getYear(movie.year)} key={movie.id}>
							{movie.title}
						</li>
					))
				) : (
					<h1>No existen peliculas</h1>
				)}
			</ul>
			<div style={{ backgroundColor: color }}>{color}</div>
			<button onClick={() => setColor("red")}>Cambiar color</button>
		</>
	);
};

Home.propTypes = {
	title: PropTypes.string,
	movies: PropTypes.array
};

Home.defaultProps = {
	title: "Titulo por defecto",
	movies: []
};
