import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/mihistoria.css";

const MiHistoria = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`mihistoria ${show ? 'fade-in' : ''}`}>
            <div className={`mihistoria-content ${show ? 'slide-in' : ''}`}>
                <h1 className="title-mihistoria">Mi Historia</h1>

                <p className="intro">
                    Soy Denis Díaz, pronosticador profesional de apuestas deportivas. Hoy en día, estoy en el 1% de apostadores rentables gracias a mis pronósticos, pero mi camino no siempre ha sido fácil.
                </p>

                <p className="early-days">
                    Llevo 15 años en el mundo de las apuestas deportivas. A los 16 años, entraba al Sportium de mi barrio con un DNI falsificado y hacía lo que hace la mayoría de la gente: apostaba 2€ a combinadas de 8 partidos a cuota 80 o 100. Naturalmente, acertaba una cada dos meses y si eso. Apostaba a favoritos y grandes equipos, pero pronto me di cuenta de que esto rara vez funcionaba. Ni las cuotas bajas ni las combinadas generalmente funcionan.
                </p>

                <p className="early-struggles">
                    A medida que avanzaba, traté de mejorar apostando más dinero en menos selecciones. Apostaba 10€ en 5 partidos, buscando ganar 100 o 200 euros. Pero también fallaba. El gran error en las apuestas es hacerlo por necesidad. Cuando apuestas para recuperar pérdidas, terminas apostando sin control y perdiendo aún más. Yo me proponía apostar 20€ cada fin de semana y terminaba apostando el triple o más.
                </p>

                <p className="mistakes">
                    Durante una buena racha, aumentaba las apuestas y, en vez de apostar 10 o 20€, apostaba 50 o 100€. Esto es otro error común. Creerse invencible tras una racha de suerte es un error. La suerte puede irse tan rápido como llega, y perdía todo lo que había ganado.
                </p>

                <p className="learning">
                    Fue entonces cuando decidí informarme y aprender sobre cómo ganar dinero con las apuestas deportivas. Estudié conceptos esenciales como el stake, el valor de las cuotas y la importancia de hacer apuestas simples en lugar de combinadas. Aunque entendía estos conceptos, seguía haciendo combinadas porque cuando tienes poco dinero siempre prefieres apostar poco para ganar mucho, y seguía equivocándome una y otra vez.
                </p>

                <p className="turning-point">
                    Hace 4 años, decidí tomar un enfoque más serio y empecé a apostar simples, lo que me permitió ganar mis primeros euros. Pero al tener muchos gastos y pocos ahorros no podía apostar cantidades altas y ganaba muy poco dinero. Otra cosa que me hacía ganar poco era el apostar simplemente por mis conocimientos, sin análisis exhaustivos. Este es otro error. Por mucho que sepas de fútbol lo normal es que si no analizas a la perfección pierdas dinero.
                </p>

                <p className="advancements">
                    El cambio real llegó hace un año y medio. Descubrí que estudiando estadística y probabilidad avanzada, y eligiendo los partidos y los mercados correctos, la probabilidad de acierto aumentaba muchísimo. Por supuesto, además de la estadística y probabilidad, hay muchas más variables en el fútbol: las variables que podemos controlar, como el estado de forma de los jugadores, lesiones, el clima, etc.; y otras que no podemos controlar, como una tarjeta roja, un penalti fallado, la situación personal de un jugador en un día concreto, etc. Todo esto hará que falles apuestas por muy bien que hayas analizado. Aquí es donde entran en juego el uso del stake y el control de las emociones. Desde que controlo esto, me da igual fallar una apuesta porque sé que soy rentable y que, a fin de mes, voy a ganar dinero. No necesito recuperar si pierdo un día y controlo a la perfección las cantidades que apuesto para maximizar ganancias con cada acierto y minimizar las pérdidas con los fallos.
                </p>

                <p className="current-status">
                    Todo esto es lo que he aprendido a manejar a la perfección y lo que me ha hecho estar en el 1% de apostadores rentables. Ahora, estoy en un punto en el que quiero ayudar a la gente a ganar un dinero extra y, sobre todo, a que aprendan a apostar.
                </p>

                <p className="call-to-action">
                    Si te sientes identificado con lo que he contado y quieres cambiar tu situación, puedes seguirme en mi canal gratuito de Telegram, donde subo varios pronósticos semanales, o contratar mis servicios para tener acceso a todos mis pronósticos.
                </p>

                <div className="cta-buttons">
                    <a
                        href="https://t.me/mi_canal"
                        className="cta-button telegram-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Canal de Telegram <i className="fab fa-telegram-plane"></i>
                    </a>
                    <Link to="/servicios" className="cta-button services-button">
                        Mis Servicios <i className="fas fa-briefcase"></i>
                    </Link>
                </div>

                <p className="final-para">
                    Te espero. ¡Nos vemos pronto!
                </p>
            </div>
        </div>
    );
}

export default MiHistoria;
