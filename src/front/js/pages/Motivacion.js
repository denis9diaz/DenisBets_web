import React from "react";
import { Link } from "react-router-dom";
import "../../styles/motivacion.css";
import portada from "/src/front/img/portada.jpg";

const Motivacion = () => {
    return (
        <div className="motivacion text-center mb-5 mt-5">
            <div className="content-container">
                <img src={portada} alt="portada" className="image-portada" />
                <div className="text-container">
                    <p className="parrafo-descripcion">
                        Soy <strong>Denis Díaz</strong>, y estoy aquí para ayudarte a conseguir <strong>ser rentable como apostador</strong>.
                    </p>
                    <p className="parrafo-descripcion2">
                        Conoce más sobre <strong>mi método</strong> y sobre <strong>mi historia</strong>.
                    </p>
                    <div className="button-container">
                        <Link to="/mimetodo"><button className="card-button-redes">Mi método</button></Link>
                        <Link to="/mihistoria"><button className="card-button-redes">Mi historia</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Motivacion;
