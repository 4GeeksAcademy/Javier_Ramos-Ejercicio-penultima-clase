import { useEffect } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../../styles/private.css";

const Privado = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.token) {
            navigate('/login');
        }
    }, [store.token, navigate])

    const logOut = () => {
		actions.logOut();
		navigate('/login');
	}

    return (
        <>

            <div className="private d-flex justify-content-center align-items-center">
                <div className="sign-out">
                    <button onClick={() => logOut()} className="btn btn-warning">Cerrar sesión</button>
                </div>
                <div className="content-private p-5">
                    <h1>Bienvenido, usuario</h1>
                    <hr />
                    <p className="fs-2">Este es tu panel privado</p>
                    <table className="table table-hover mt-4">
                        <thead className="fs-4">
                            <tr>
                                <td className="">Vacante nº</td>
                                <td className="">Puesto</td>
                                <td className="">Empresa</td>
                                <td className="">Fecha de postulación</td>
                                <td className="">Estado</td>
                            </tr>
                        </thead>
                        <tbody className="fs-5">
                            <tr>
                                <td className="">1</td>
                                <td className="">Administrativo/Comercial</td>
                                <td className="">Coca Cola LTD.</td>
                                <td className="">02/06/2024</td>
                                <td className="">Activo</td>
                            </tr>
                            <tr>
                                <td className="">2</td>
                                <td className="">Técnico en sistemas</td>
                                <td className="">NASA</td>
                                <td className="">30/01/2024</td>
                                <td className="">Finalizado</td>
                            </tr>
                            <tr>
                                <td className="">3</td>
                                <td className="">Frontend Developer</td>
                                <td className="">Accenture</td>
                                <td className="">17/01/2024</td>
                                <td className="">Activo</td>
                            </tr>
                            <tr>
                                <td className="">4</td>
                                <td className="">Backend Developer</td>
                                <td className="">Globant</td>
                                <td className="">12/03/2024</td>
                                <td className="">Activo</td>
                            </tr>
                            <tr>
                                <td className="">5</td>
                                <td className="">FullStack Developer</td>
                                <td className="">Space X</td>
                                <td className="">22/05/2024</td>
                                <td className="">Finalizado</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        </>
    )
}

export default Privado;