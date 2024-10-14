import React from "react";
import { Link } from "react-router-dom";
import "../../styles/accion.css";

const Accion = () => {
    return (
        <div className="accion text-center mb-5 mt-5">
            <Link to="/servicios"><button className="styled-button">
                Empezar ahora
            </button></Link>
        </div>
    );
};

export default Accion;
