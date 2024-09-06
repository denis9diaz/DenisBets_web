import React, { useEffect, useRef, useState } from "react";
import "../../styles/encontraras.css";
import balon from "/src/front/img/balon.png";
import bundes from "/src/front/img/bundes.jpeg";

const Encontraras = () => {
    const encontradasRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("El componente Encontraras es visible en la pantalla");
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (encontradasRef.current) {
            observer.observe(encontradasRef.current);
        }

        return () => {
            if (encontradasRef.current) {
                observer.unobserve(encontradasRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`encontraras-container d-flex align-items-center justify-content-center mt-5 mb-5 ${isVisible ? "visible" : "hidden"}`}
            ref={encontradasRef}
        >
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
                        Te diré la <strong>cuota exacta</strong> a la que tienes que apostar.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        El <strong> 10%</strong> restante serán <strong> pre-partido</strong>.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        <strong>Estadísticas reales</strong> que podrás comprobar tú mismo.
                    </li>
                    <li className="list-item">
                        <img src={balon} alt="Balón de fútbol" className="icono-balon" />
                        <strong>100% transparencia</strong>. Jamás me verás ocultar o borrar una apuesta fallada.
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
