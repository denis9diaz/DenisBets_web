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
                <div className="col-md-4">
                    <div className="card">
                        <FontAwesomeIcon icon={faFrown} className="icon red-icon" />
                        <h2 className="card-title">¿Cansado de perder dinero en tus apuestas?</h2>
                        <button className="toggle-button" onClick={() => toggleText(0)}>
                            {showText[0] ? "Ver menos" : "Ver por qué"}
                        </button>
                        {showText[0] && (
                            <div className="card-text">
                                <p>
                                    Es frustrante, ¿verdad? Pasas horas analizando estadísticas, revisando las últimas noticias de los equipos y jugadores, e incluso sigues los consejos de diferentes expertos.
                                </p>
                                <p>
                                    Sin embargo, cuando llega el momento de la verdad, los resultados no son los que esperabas. Las apuestas deportivas suelen ser impredecibles y sin la estrategia correcta, tus esfuerzos pueden verse desperdiciados.
                                </p>
                                <p>
                                    Esto deja una sensación de impotencia y de pérdida.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="icon yellow-icon" />
                        <h2 className="card-title">Las consecuencias de no tener una estrategia sólida</h2>
                        <button className="toggle-button" onClick={() => toggleText(1)}>
                            {showText[1] ? "Ver menos" : "Ver consecuencias"}
                        </button>
                        {showText[1] && (
                            <div className="card-text">
                                <p>
                                    Si continúas apostando sin un plan bien estructurado, es probable que sigas viendo cómo tus fondos disminuyen semana tras semana.
                                </p>
                                <p>
                                    Cada apuesta fallida no solo afecta a tu cuenta bancaria, sino también a tu confianza y disfrute del deporte.
                                </p>
                                <p>
                                    Al final, podrías sentirte tentado a abandonar por completo, perdiendo la oportunidad de hacer de las apuestas deportivas una actividad rentable y emocionante.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <FontAwesomeIcon icon={faCheckCircle} className="icon green-icon" />
                        <h2 className="card-title">La solución que transformará tu forma de apostar</h2>
                        <button className="toggle-button" onClick={() => toggleText(2)}>
                            {showText[2] ? "Ver menos" : "Ver solución"}
                        </button>
                        {showText[2] && (
                            <div className="card-text">
                                <p>
                                    Imagina tener acceso a pronósticos basados en análisis estadísticos profundos y estrategias comprobadas que te guíen en cada apuesta que realices. No más suposiciones, no más pérdidas constantes.
                                </p>
                                <p>
                                    En DenisBets combino mi experiencia en el análisis deportivo con técnicas avanzadas de predicción mediante probabilidad, para ofrecerte pronósticos que realmente funcionan.
                                </p>
                                <p>
                                    Aumentarás tus probabilidades de ganar, y apostarás con la misma confianza que apuesto yo, sabiendo que puedes perder apuestas (y las perderás) pero que a final de mes estarás en positivo.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemaSolucion;
