import React, { useState } from "react";
import "../../styles/problemasolucion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faExclamationTriangle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ProblemaSolucion = () => {
    const [showText, setShowText] = useState([false, false, false]);

    const toggleText = (index) => {
        const newShowText = [...showText];
        newShowText[index] = !newShowText[index];
        setShowText(newShowText);
    };

    return (
        <div className="problema-solucion-container">
            <div className="row justify-content-center">
                {[
                    {
                        icon: faFrown,
                        title: "¿Cansado de perder dinero en tus apuestas deportivas?",
                        buttonText: ["Ver menos", "Ver por qué"],
                        text: (
                            <>
                                <p className="parrafo-ps">
                                    Es frustrante, ¿verdad? Pasas horas analizando estadísticas, revisando las últimas noticias de los equipos y jugadores, e incluso sigues los consejos de diferentes expertos.
                                </p>
                                <p className="parrafo-ps">
                                    Sin embargo, cuando llega el momento de la verdad, los resultados no son los que esperabas. Las apuestas deportivas suelen ser impredecibles y sin la estrategia correcta, tus esfuerzos pueden verse desperdiciados.
                                </p>
                                <p className="parrafo-ps">
                                    Esto deja una sensación de impotencia y de pérdida.
                                </p>
                            </>
                        ),
                        iconClass: "red-icon"
                    },
                    {
                        icon: faExclamationTriangle,
                        title: "Las consecuencias de no tener una estrategia sólida",
                        buttonText: ["Ver menos", "Ver consecuencias"],
                        text: (
                            <>
                                <p className="parrafo-ps">
                                    Si continúas apostando sin un plan bien estructurado, es probable que sigas viendo cómo tus fondos disminuyen semana tras semana.
                                </p>
                                <p className="parrafo-ps">
                                    Cada apuesta fallida no solo afecta a tu cuenta bancaria, sino también a tu confianza y disfrute del deporte.
                                </p>
                                <p className="parrafo-ps">
                                    Al final, podrías sentirte tentado a abandonar por completo, perdiendo la oportunidad de hacer de las apuestas deportivas una actividad rentable y emocionante.
                                </p>
                            </>
                        ),
                        iconClass: "yellow-icon"
                    },
                    {
                        icon: faCheckCircle,
                        title: "La solución que transformará tu forma de apostar",
                        buttonText: ["Ver menos", "Ver solución"],
                        text: (
                            <>
                                <p className="parrafo-ps">
                                    Imagina tener acceso a pronósticos basados en análisis estadísticos profundos y estrategias comprobadas que te guíen en cada apuesta que realices. No más suposiciones, no más pérdidas constantes.
                                </p>
                                <p className="parrafo-ps">
                                    En DenisBets combino mi experiencia en el análisis deportivo con técnicas avanzadas de predicción mediante probabilidad, para ofrecerte pronósticos que realmente funcionan.
                                </p>
                                <p className="parrafo-ps">
                                    Aumentarás tus probabilidades de ganar, y apostarás con la misma confianza que apuesto yo, sabiendo que puedes perder apuestas (y las perderás) pero que a final de mes estarás en positivo.
                                </p>
                            </>
                        ),
                        iconClass: "green-icon"
                    }
                ].map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className={`card custom-card ${showText[index] ? "expanded" : ""}`}>
                            <FontAwesomeIcon icon={item.icon} className={`icon ${item.iconClass}`} />
                            <h2 className="card-title">{item.title}</h2>
                            <button className="toggle-button" onClick={() => toggleText(index)}>
                                {showText[index] ? item.buttonText[0] : item.buttonText[1]}
                            </button>
                            {showText[index] && <div className="card-text">{item.text}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProblemaSolucion;
