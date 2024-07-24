import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import logInImg from "../../img/login.png"
import { Link, useNavigate } from "react-router-dom";


export const LogIn = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const logIn = async (email, password) => {
		await actions.logIn(email, password);
		navigate('/private');
	}

	return (
		<div className="home d-flex align-items-center justify-content-center">
			<div className="log-in-container text-center">
				<div className="mt-5">
					<img src={logInImg} className="w-75" alt="" />
				</div>
				<p className="fs-2 mt-3">¡Hola de nuevo!</p>
				<p className="text-secondary">Bienvenido otra vez</p>
				<div>
					<div className="d-flex flex-column justify-content-center gap-4 px-5 mt-4">
						<input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"  onChange={(e) => setEmail(e.target.value)} value={email}/>
						<input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(e) => setPassword(e.target.value)} value={password}/>
						<button onClick={() => logIn(email,password)} className="btn btn-primary fs-3 fw-bolder">Log In</button>
						<p className="text-secondary pb-5">¿No tienes una cuenta? <Link to="/" className="text-danger fw-bold text-decoration-none">Regístrate!</Link></p>
					</div>
				</div>

			</div>

		</div>
	);
};
