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
			token: '',
			email: ''
		},
		actions: {
			logIn: async (email, password) => {
				const store = getStore();
				const resp = await fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: "POST",
					body: JSON.stringify({ email, password }),
					headers: { "Content-Type": "application/json" }
				});
				const data = await resp.json();
				setStore({ ...store, token: data.token});

			},
			signUp: async (email, password, is_active) => {
				const store = getStore();
				try {
					console.log("Backend URL:", process.env.BACKEND_URL);
					const resp = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
						method: "POST",
						body: JSON.stringify({ email, password, is_active: is_active}),
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
					setStore({ ...store, token: data.token});
					console.log("Success:", data);
				} catch (error) {
					// Manejo de errores de red u otros errores
					console.error("Network error:", error);
				}
			}
		}
	};
};

export default getState;
