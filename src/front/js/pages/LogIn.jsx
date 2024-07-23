import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import logIn from "../../img/login.png"
import { Link } from "react-router-dom";


export const LogIn = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home d-flex align-items-center justify-content-center">
			<div className="log-in-container text-center">
				<div className="mt-5">
					<img src={logIn} className="w-75" alt="" />
				</div>
				<p className="fs-2 mt-3">¡Hola de nuevo!</p>
				<p className="text-secondary">Bienvenido otra vez</p>
				<form action="">
					<div class="d-flex flex-column justify-content-center gap-4 px-5 mt-4">
						<input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
						<input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
						<button type="submit" className="btn btn-primary fs-3 fw-bolder">Log In</button>
						<p className="text-secondary">¿No tienes una cuenta? <Link to="/" className="text-danger fw-bold text-decoration-none">Regístrate!</Link></p>
					</div>
				</form>

			</div>

		</div>
	);
};
