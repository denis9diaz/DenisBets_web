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
                    <strong>Llevo 15 años en el mundo de las apuestas deportivas.</strong> Empecé a los 16 años, entrando al Sportium de mi barrio con un DNI falsificado, haciendo lo que hace la mayoría: apostaba 2€ en combinadas de 8 partidos con cuotas de 80 o 100. Acertaba una cada dos meses, si acaso. Apostaba a favoritos y grandes equipos, pero me di cuenta de que eso rara vez funciona. Ni las cuotas bajas ni las combinadas suelen funcionar. Luego traté de mejorar apostando más dinero en menos selecciones: 10€ en 5 partidos, buscando ganar 100 o 200 euros, pero también fallaba. <strong>Apostar por necesidad es un gran error.</strong> Cuando apuestas para recuperar pérdidas, acabas apostando sin control y perdiendo aún más. Durante una buena racha, aumentaba las apuestas, pensando que era invencible, pero la suerte puede irse tan rápido como llega, y perdía todo lo que había ganado.
                </p>

                <p className="section-text slide-in-bottom">
                    Decidí aprender a ganar dinero de verdad con las apuestas deportivas. Me informé sobre conceptos como el stake, el valor de las cuotas, y la importancia de hacer apuestas simples en lugar de combinadas. Aunque entendía estos conceptos, seguía haciendo combinadas porque, con poco dinero, siempre prefieres apostar poco para ganar mucho. <strong>Me seguía equivocando una y otra vez</strong>.
                </p>

                <p className="section-text slide-in-bottom">
                    Hace 4 años, decidí tomar un enfoque más serio y empecé a apostar simples, ganando mis primeros euros. Pero, con muchos gastos y pocos ahorros, no podía apostar cantidades altas, así que ganaba poco dinero. También ganaba poco porque apostaba solo por mis conocimientos, sin hacer análisis exhaustivos. Por mucho que sepas de fútbol, <strong>si no analizas a la perfección, lo normal es perder dinero.</strong>
                </p>

                <p className="section-text slide-in-bottom">
                    <strong>El cambio real</strong> llegó cuando descubrí que <strong>estudiando estadística y probabilidad avanzada</strong>, y eligiendo los partidos y los mercados correctos, <strong>la probabilidad de acierto aumentaba muchísimo</strong>. Por supuesto, además de la estadística y probabilidad, hay muchas más variables en el fútbol: las variables que podemos controlar, como el estado de forma de los jugadores, lesiones, el clima, etc.; y otras que no podemos controlar, como una tarjeta roja, un penalti fallado, la situación personal de un jugador en un día concreto, etc. Todo esto hará que falles apuestas por muy bien que hayas analizado. 
                </p>

                <p className="section-text slide-in-bottom">
                    Después de dos años verificando varios métodos de análisis, y con la ayuda de otros expertos del sector, <strong>ahora tengo varios métodos con un 60-70% de acierto a cuota media de 1.72</strong>, que me hacen ganar dinero mes a mes. Ahora me da igual fallar una apuesta porque sé que soy rentable y que, a fin de mes, voy a ganar dinero. No necesito recuperar si pierdo un día y controlo a la perfección las cantidades que apuesto para maximizar ganancias con cada acierto y minimizar las pérdidas con los fallos.
                </p>

                <p className="section-text slide-in-bottom">
                    Ha llegado el momento de ayudaros a vosotros a ganar un dinero extra y, sobre todo, ayudaros a <strong>aprender a apostar de manera efectiva</strong>.
                </p>

                <h2 className="cta-title slide-in-bottom">¿Te ayudo?</h2>
                <p className="cta-text slide-in-bottom">
                    Si te sientes identificado con lo que he contado y quieres cambiar tu situación,  <strong>puedes seguirme en mi canal gratuito de Telegram,</strong> donde subo varios pronósticos semanales, o <strong>contratar mis servicios</strong> para tener acceso a <strong>todos</strong> mis pronósticos. También puedes seguirme en Instagram y TikTok, donde doy consejos que te ayudarán a ser rentable en las apuestas deportivas.
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
                <p className="final-para slide-in-bottom">
                    Te espero. ¡Nos vemos pronto!
                </p>
            </div>
        </div>
    );
}

export default MiHistoria;
