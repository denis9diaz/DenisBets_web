import React from "react";
import "../../styles/redes.css";

const Redes = () => {
    return (
        <div className="redes">
            <div className="cards-container-redes">
                <div className="card-redes">
                    <div className="card-icon">
                        <i className="fab fa-telegram"></i>
                    </div>
                    <h2 className="card-title-redes">Canal de Telegram</h2>
                    <p className="card-text-redes">
                        Únete a mi canal gratuito de Telegram donde regalo varios pronósticos gratuitos semanalmente.
                    </p>
                    <a 
                        href="https://t.me/mi_canal" 
                        className="card-button-redes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Entrar
                    </a>
                </div>
                <div className="card-redes">
                    <div className="card-icon">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <h2 className="card-title-redes">Mi Instagram</h2>
                    <p className="card-text-redes">
                        Sígueme en Instagram para ver actualizaciones diarias, análisis de equipos y partidos y más contenido relacionado.
                    </p>
                    <a 
                        href="https://instagram.com/mi_perfil" 
                        className="card-button-redes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Entrar
                    </a>
                </div>
                <div className="card-redes">
                    <div className="card-icon">
                        <i className="fab fa-tiktok"></i>
                    </div>
                    <h2 className="card-title-redes">Mi TikTok</h2>
                    <p className="card-text-redes">
                        Descubre mis videos en TikTok para ver tips rápidos y contenido interesante sobre apuestas deportivas.
                    </p>
                    <a 
                        href="https://tiktok.com/@mi_perfil" 
                        className="card-button-redes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Entrar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Redes;
