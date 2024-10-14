import React from "react";
import { Link } from "react-router-dom";
import "../../styles/mimetodo.css";

const MiHistoria = () => {
    return (
        <div className="consejos-container">
            <div className="consejos-content">
                <h1 className="title-mimetodo slide-in-bottom">Mi Historia</h1>

                <p className="section-text slide-in-bottom">
                    <strong>Soy Denis Díaz, pronosticador profesional de apuestas deportivas.</strong> Hoy en día, <strong>estoy entre el 1% de apostadores rentables</strong> gracias a mis propios pronósticos, pero mi camino no siempre ha sido fácil.
                </p>

                <p className="section-text slide-in-bottom">
                    <strong>Llevo 15 años en el mundo de las apuestas deportivas.</strong> Empecé a los 16 años, entrando al Sportium de mi barrio con un DNI falsificado, haciendo lo que hace la mayoría: apostar a equipos favoritos y a los que "deberían ganar". Apostar poco dinero a apuestas combinadas para ganar mucho con poco riesgo. <strong>Apostaba por necesidad y eso es un gran error.</strong> Cuando apuestas porque necesitas dinero o para recuperar pérdidas, acabas apostando sin control y perdiendo aún más. <strong>Otro error que cometía era no llevar ningún control sobre las cantidades que apostaba.</strong> Cuando tenía una buena racha aumentaba las cantidades pensando que era invencible, pero la suerte no dura eternamente y perdía todo lo que había ganado.
                </p>

                <p className="section-text slide-in-bottom">
                    Decidí informarme sobre cómo ser rentable en apuestas deportivas y descubrí conceptos básicos como el stake, el yield, la unidad, el valor de las cuotas, y la importancia de hacer apuestas simples en lugar de combinadas. Aunque entendía estos conceptos, seguía haciendo combinadas porque cuando tienes poco dinero prefieres arriesgar poco para ganar mucho. <strong>Me seguía equivocando una y otra vez</strong>.
                </p>

                <p className="section-text slide-in-bottom">
                    Hace 4 años, decidí tomar un enfoque más serio y empecé a apostar simples, ganando mis primeros euros. Pero, con muchos gastos y pocos ahorros, no podía apostar cantidades altas, así que ganaba poco dinero. También ganaba poco porque apostaba solo por mis conocimientos, sin hacer análisis exhaustivos. Por mucho que sepas de fútbol, <strong>si no analizas a la perfección, lo normal es perder dinero.</strong>
                </p>

                <p className="section-text slide-in-bottom">
                    <strong>El cambio real</strong> llegó cuando descubrí que <strong>estudiando estadística y probabilidad avanzada</strong>, y eligiendo los partidos y los mercados correctos, <strong>la probabilidad de acierto aumentaba muchísimo</strong>. Por supuesto, además de la estadística y probabilidad, hay muchas más variables en el fútbol: las variables que podemos controlar, como el estado de forma de los jugadores, lesiones, el clima, etc.; y otras que no podemos controlar, como una tarjeta roja, un penalti fallado, la situación personal de un jugador en un día concreto, etc. Todo esto hará que falles apuestas por muy bien que hayas analizado. 
                </p>

                <p className="section-text slide-in-bottom">
                    Después de dos años verificando varios métodos de análisis, y con la ayuda de otros expertos del sector, <strong>ahora tengo varios métodos con un 65-75% de acierto a cuota media de 1.72</strong>, que me hacen ganar dinero mes a mes. Ahora me da igual fallar una apuesta porque sé que soy rentable y que, a fin de mes, voy a ganar dinero. No necesito recuperar si pierdo un día y controlo a la perfección las cantidades que apuesto para maximizar ganancias con cada acierto y minimizar las pérdidas con los fallos.
                </p>

                <p className="section-text slide-in-bottom">
                    Ha llegado el momento de ayudaros a vosotros a ganar un dinero extra y, sobre todo, ayudaros a <strong>aprender a apostar de manera efectiva</strong>.
                </p>

                <h2 className="cta-title slide-in-bottom">¿Te ayudo?</h2>
                <p className="cta-text slide-in-bottom">
                    Si te sientes identificado con lo que he contado y quieres cambiar tu situación, <strong>puedes contratar mis servicios</strong> para tener acceso a <strong>todos mis pronósticos</strong> o <strong>seguirme en mi canal gratuito de Telegram,</strong> donde subo varios pronósticos semanales. También puedes seguirme en Instagram y TikTok, donde doy consejos que te ayudarán a ser rentable en las apuestas deportivas.
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
