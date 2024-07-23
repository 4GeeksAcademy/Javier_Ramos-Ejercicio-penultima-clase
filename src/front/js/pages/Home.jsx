import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import signUp from "../../img/signup.png"
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home d-flex align-items-center justify-content-center">
			<div className="log-in-container text-center">
				<div className="mt-5">
					<img src={signUp} className="w-75" alt="" />
				</div>
				<p className="fs-2 mt-4">¡Regístrate!</p>
				<p className="text-secondary">Crea una nueva cuenta</p>
				<form action="">
					<div class="d-flex flex-column justify-content-center gap-4 px-5 mt-5">
						<input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
						<input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
						<button type="submit" className="btn btn-primary fs-3 fw-bolder">Sign up</button>
						<p className="text-secondary">¿Ya tienes una cuenta? <Link to="/login" className="text-danger fw-bold text-decoration-none">Logueate!</Link></p>
					</div>
				</form>

			</div>

		</div>
	);
};
