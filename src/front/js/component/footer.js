import React from "react";
import "../../styles/footer.css";

export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-left">
                    <h5>Enlaces Rápidos</h5>
                    <ul className="list-unstyled">
                        <li><a href="#home">Servicios</a></li>
                        <li><a href="#contact">Consejos</a></li>
                        <li><a href="#about">Mi historia</a></li>
                    </ul>
                </div>
                <div className="col-md-4 text-left">
                    <h5>Sígueme</h5>
                    <div className="social-icons">
                        <a href="https://t.me/denisbets" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram"></i> Mi Canal de Telegram
                        </a>
                        <a href="https://instagram.com/denisbets" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Mi Instagram
                        </a>
                        <a href="https://tiktok.com/@denisbets" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i> Mi TikTok
                        </a>
                    </div>
                </div>
                <div className="col-md-4 text-left">
                    <h5>Contacto</h5>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> Calle Hola, 35. Madrid, España
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> 623 256 698
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> contacto@denisbets.com
                    </p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <p className="text-muted">&copy; 2024 DenisBets. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
);
