import React from "react";
import { Link } from "react-router-dom";
import "../../styles/mimetodo.css";

const MiHistoria = () => {
    return (
        <div className="consejos-container">
            <div className="consejos-content">
                <h1 className="title-mimetodo slide-in-bottom">Mi Historia</h1>

                <p className="section-text slide-in-bottom">
                    <strong>Soy Denis Díaz, pronosticador profesional de apuestas deportivas. Hoy en día, estoy en el 1% de apostadores rentables gracias a mis pronósticos, pero mi camino no siempre ha sido fácil.</strong>
                </p>

                <p className="section-text slide-in-bottom">
                    <strong>Llevo 15 años en el mundo de las apuestas deportivas.</strong> A los 16 años, entraba al Sportium de mi barrio con un DNI falsificado y hacía lo que hace la mayoría de la gente: apostaba 2€ a combinadas de 8 partidos a cuota 80 o 100. Naturalmente, acertaba una cada dos meses y si eso. Apostaba a favoritos y grandes equipos, pero pronto me di cuenta de que esto rara vez funcionaba. Ni las cuotas bajas ni las combinadas generalmente funcionan.
                </p>

                <p className="section-text slide-in-bottom">
                    A medida que avanzaba, traté de mejorar apostando más dinero en menos selecciones. Apostaba 10€ en 5 partidos, buscando ganar 100 o 200 euros. Pero también fallaba. El gran error en las apuestas es hacerlo por necesidad. Cuando apuestas para recuperar pérdidas, terminas apostando sin control y perdiendo aún más. Yo me proponía apostar 20€ cada fin de semana y terminaba apostando mucho más.
                    Durante una buena racha, aumentaba las apuestas y, en vez de apostar 10 o 20€, apostaba 50 o 100€. Esto es otro error común. <strong>Creerse invencible tras una racha de suerte es un error. La suerte puede irse tan rápido como llega,</strong> y perdía todo lo que había ganado.
                </p>

                <p className="section-text slide-in-bottom">
                    Fue entonces cuando <strong>decidí informarme y aprender sobre cómo ganar dinero con las apuestas deportivas.</strong> Estudié conceptos esenciales como el stake, el valor de las cuotas y la importancia de hacer apuestas simples en lugar de combinadas. Aunque entendía estos conceptos, seguía haciendo combinadas porque cuando tienes poco dinero siempre prefieres apostar poco para ganar mucho, y seguía equivocándome una y otra vez.
                </p>

                <p className="section-text slide-in-bottom">
                    Hace 4 años, decidí tomar un enfoque más serio y empecé a apostar simples, lo que me permitió ganar mis primeros euros. Pero al tener muchos gastos y pocos ahorros no podía apostar cantidades altas y ganaba muy poco dinero. Otra cosa que me hacía ganar poco era el apostar simplemente por mis conocimientos, sin análisis exhaustivos. Este es otro error. Por mucho que sepas de fútbol lo normal es que si no analizas a la perfección pierdas dinero.
                </p>

                <p className="section-text slide-in-bottom">
                    <strong>El cambio real llegó hace un año y medio.</strong> Descubrí que <strong>estudiando estadística y probabilidad avanzada,</strong> y eligiendo los partidos y los mercados correctos, <strong>la probabilidad de acierto aumentaba muchísimo.</strong> Por supuesto, además de la estadística y probabilidad, hay muchas más variables en el fútbol: las variables que podemos controlar, como el estado de forma de los jugadores, lesiones, el clima, etc.; y otras que no podemos controlar, como una tarjeta roja, un penalti fallado, la situación personal de un jugador en un día concreto, etc. Todo esto hace que el análisis sea solo una guía y por ello habrá rachas malas y buenas. Pero lo más importante es entender que con un análisis exhaustivo la probabilidad de éxito aumenta mucho.
                </p>

                <p className="section-text slide-in-bottom">
                    Hoy en día, soy un apostador rentable, gracias a mi método y análisis de estadística. A lo largo de los años, he perfeccionado mi estrategia y aprendido de mis errores.
                </p>

                <h2 className="cta-title slide-in-bottom">¿Te gustaría que te ayude a mejorar tus apuestas?</h2>
                <p className="cta-text slide-in-bottom">
                    Únete a mi canal de Telegram para recibir pronósticos gratuitos cada semana o contrata mis servicios para acceder a todos mis pronósticos.
                </p>
                <div className="cta-buttons slide-in-bottom">
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
                    <a
                        href="https://instagram.com/mi_perfil" 
                        className="cta-button telegram-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mi Instagram <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MiHistoria;
