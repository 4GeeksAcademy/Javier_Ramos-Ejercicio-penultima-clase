import { useEffect } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Privado = () => {

    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if(!store.token){
            navigate('/login');
        }

    },[])

    return (
        <>
            <h1>Che boludo estás logueado</h1>
            <p>{store.token}</p>
        </>
    )
}

export default Privado;