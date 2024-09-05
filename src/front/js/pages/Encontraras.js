import React from "react";
import "../../styles/encontraras.css";
import balon from "/src/front/img/balon.png";
import bundes from "/src/front/img/bundes.jpeg";

const Encontraras = () => {
    return (
        <div className="encontraras-container d-flex align-items-center justify-content-center mt-5 mb-5">
            <div className="encontraras-text">
                <h2 className="title-encontraras slide-in-bottom">¿Qué encontrarás si contratas mis servicios?</h2>
                <ul className="encontraras-list slide-in-bottom">
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        Las apuestas serán únicamente de <strong> fútbol</strong>.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        Alrededor del <strong> 90%</strong> de las apuestas las mandaré antes del partido para que las hagas <strong> en directo</strong>.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        Te diré la cuota exacta a la que tienes que entrar.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        El <strong> 10%</strong> restante serán <strong> pre-partido</strong>.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        <strong> Estadísticas reales</strong> que podrás comprobar tú mismo.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        100% <strong> transparencia</strong>. Jamás me verás ocultar o borrar una apuesta fallada.
                    </li>
                </ul>
            </div>
            <div className="encontraras-image">
                <img src={bundes} alt="Imagen de servicios" />
            </div>
        </div>
    );
};

export default Encontraras;
