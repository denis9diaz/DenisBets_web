import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/motivacion.css";
import portada from "/src/front/img/portada.jpg";

const Motivacion = () => {
    const motivacionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("El componente es visible en la pantalla");
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (motivacionRef.current) {
            observer.observe(motivacionRef.current);
        }

        return () => {
            if (motivacionRef.current) {
                observer.unobserve(motivacionRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`motivacion text-center mb-5 mt-5 ${isVisible ? "visible" : "hidden"}`}
            ref={motivacionRef}
        >
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
