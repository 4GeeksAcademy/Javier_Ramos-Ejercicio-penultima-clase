import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import signUpImg from "../../img/signup.png"
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setIsActive] = useState(true);
	const navigate = useNavigate();

	const signUp = async (email, password, isActive) => {
		await actions.signUp(email, password, isActive);
		navigate('/private');
	}


	return (
		<div className="home d-flex align-items-center justify-content-center">
			<div className="log-in-container text-center">
				<div className="mt-5">
					<img src={signUpImg} className="w-75" alt="" />
				</div>
				<p className="fs-2 mt-4">¡Regístrate!</p>
				<p className="text-secondary">Crea una nueva cuenta</p>
				<div>
					<div className="d-flex flex-column justify-content-center gap-4 px-5 mt-5">
						<input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => setEmail(e.target.value)} value={email}/>
						<input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"  onChange={(e) => setPassword(e.target.value)} value={password}/>
						<input type="check" style={{display: "none"}} placeholder="" aria-label="active" aria-describedby="basic-addon1"  onChange={(e) => setIsActive(e.target.value)} value={isActive}/>
						<button onClick={() => signUp(email,password, isActive)} className="btn btn-primary fs-3 fw-bolder">Sign up</button>
						<p className="text-secondary pb-5">¿Ya tienes una cuenta? <Link to="/login" className="text-danger fw-bold text-decoration-none">Logueate!</Link></p>
					</div>
				</div>

			</div>

		</div>
	);
};
