const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			urlApi: "https://www.swapi.tech/api",
			character: null,
			error: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacter: id => {
				const store = getStore();

				fetch(`${store.urlApi}/people/${id}`, {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							setStore({ error: "No se pudo obtener el personaje" });
						}
					})
					.then(data => !!data && setStore({ character: data.result.properties }));
			}
		}
	};
};

export default getState;
