const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
				},
			],
			token: sessionStorage.getItem("token") || null,
			email: sessionStorage.getItem("email") || null
		},
		actions: {
			logIn: async (email, password) => {
				const store = getStore();
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/login`, {
						method: "POST",
						body: JSON.stringify({ email, password }),
						headers: { "Content-Type": "application/json" }
					});
					const data = await resp.json();

					if (data.token) { 
						// Guardar el token en sessionStorage
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("email", data.email);
						setStore({ ...store, token: data.token, email: data.email });
						console.log("Success:", data);
					} else {
						console.error("Token no recibido:", data);
					}
				} catch (error) {
					console.error("Network error:", error);
				}
			},
			signUp: async (email, password, is_active) => {
				const store = getStore();
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
						method: "POST",
						body: JSON.stringify({ email, password, is_active: is_active }),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (!resp.ok) {
						// Manejo de respuestas no exitosas del servidor
						const errorData = await resp.json();
						console.error("Error:", errorData);
						return;
					}

					const data = await resp.json();

					if (data.access_token) {
						// Guardar el token en sessionStorage
						sessionStorage.setItem("token", data.access_token);
						sessionStorage.setItem("email", data.email);
						setStore({ ...store, token: data.access_token, email: data.email });
						console.log("Success:", data);
					} else {
						console.error("Token no recibido:", data);
					}
				} catch (error) {
					// Manejo de errores de red u otros errores
					console.error("Network error:", error);
				}
			},
			logOut: () => {
				const store = getStore();
				sessionStorage.removeItem("token");
				setStore({ ...store, token: '', email: '' });
			},
		}
	};
};

export default getState;
