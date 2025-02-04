import "../../styles/privatesection.css";
import React from "react";

const PrivateSection = () => {
    return (
        <div className="private-section">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <h2 className="private-section-title">
                        ¡Bienvenido a la sección privada!
                    </h2>
                    <p className="private-section-text">
                        En esta sección encontrarás información exclusiva para miembros registrados.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrivateSection;
