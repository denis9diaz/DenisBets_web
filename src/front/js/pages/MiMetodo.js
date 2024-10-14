import React from "react";
import { Link } from "react-router-dom";
import "../../styles/mimetodo.css";

const MiMetodo = () => {
    return (
        <div className="consejos-container">
            <div className="consejos-content">
                <h1 className="title-mimetodo slide-in-bottom">Mi Método</h1>
                <h2 className="section-title slide-in-bottom">¿Sabías que apostar sin un método es como jugar a la ruleta?</h2>
                <p className="section-text slide-in-bottom">
                    Muchos de nosotros hemos estado en la misma situación: apostando basado en instintos, sensaciones o “lo que debería pasar”. Sin embargo, tanto tú como yo en ese momento estábamos equivocados. Las casas de apuestas establecen las cuotas con gran precisión, lo que hace que a largo plazo sea prácticamente imposible ser rentable si solo confiamos en nuestro instinto.
                </p>
                <h2 className="section-title slide-in-bottom">La buena noticia: hay una solución.</h2>
                <p className="section-text slide-in-bottom">
                    Durante mucho tiempo, yo también aposté sin un método claro. Pero ahora, después de años, puedo decir con confianza que soy un apostador rentable. ¿Cómo lo logré? Entendiendo que las apuestas deportivas, como cualquier otro campo, se mueven según gráficos y estadísticas. Comprender cómo leer estos gráficos y aplicar métodos basados en probabilidad avanzada ha sido la clave para mi éxito.
                </p>
                <h2 className="section-title slide-in-bottom">Lo que necesitas para cambiar tu situación:</h2>
                <ol className="steps-list slide-in-bottom">
                    <li className="step-item">
                        <strong>Analizar con precisión:</strong> Utiliza estadística y probabilidad avanzada para analizar partidos y apuestas. El fútbol es fútbol y aparte de la estadística y probabilidad, hay muchas más variables con las que no podemos contar (una roja, un mal día, fallar un penalti, etc.) Es por eso que perderás apuestas aunque estén perfectamente analizadas. Debes entender que eso es normal y forma parte del juego. Pero lo que también es verdad, es que el análisis nos guía y nos hace elegir los partidos en los que es más posible ganar dinero.
                    </li>
                    <li className="step-item">
                        <strong>Controlar el Stake:</strong> La gestión del dinero es fundamental. Un manejo efectivo del stake ayudará a minimizar pérdidas durante las malas rachas y maximizar ganancias durante las buenas.
                    </li>
                    <li className="step-item">
                        <strong>Manejar tus emociones:</strong> Las emociones pueden ser el mayor enemigo de un apostador. Evita tomar decisiones impulsivas para recuperar lo perdido, ya que esto suele llevar a mayores pérdidas.
                    </li>
                </ol>
                <h2 className="section-title slide-in-bottom">En resumen:</h2>
                <p className="section-text2 slide-in-bottom">
                    Para ser rentable en apuestas deportivas, debes:
                </p>
                <ul className="summary-list slide-in-bottom">
                    <li className="summary-item">Analizar con precisión mediante probabilidad y estadística.</li>
                    <li className="summary-item">Controlar el uso del stake y las cuotas a las que apuestas.</li>
                    <li className="summary-item">Manejar tus emociones de manera efectiva.</li>
                </ul>
                <p className="final-text slide-in-bottom">
                    Gracias a años de trabajo duro, he perfeccionado estos aspectos y me encuentro entre el 1% de los apostadores rentables.
                </p>
                <h2 className="cta-title slide-in-bottom">Compruébalo tú mismo.</h2>
                <p className="cta-text slide-in-bottom">
                    Únete a mi canal de Telegram, donde comparto pronósticos gratuitos cada semana, o contrata mis servicios para tener acceso a <strong>todos mis pronósticos</strong>.
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

export default MiMetodo;
