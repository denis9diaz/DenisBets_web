import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import Logo from "/src/front/img/logo.png"

const Footer = () => (
    <footer className="footer mt-auto py-5 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-left">
                    <img src={Logo} alt="logo" className="image-logo-footer" />
                </div>
                <div className="col-md-3 text-left">
                    <h5>Enlaces Rápidos</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/mimetodo">Mi método</Link></li>
                        <li><Link to="/mihistoria">Mi historia</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 text-left">
                    <h5>Sígueme</h5>
                    <div className="social-icons">
                        <a
                            href="https://t.me/mi_canal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-telegram"></i> Mi Canal de Telegram
                        </a>
                        <a
                            href="https://instagram.com/mi_perfil"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i> Mi Instagram
                        </a>
                        <a
                            href="https://tiktok.com/@mi_perfil"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-tiktok"></i> Mi TikTok
                        </a>
                    </div>
                </div>
                <div className="col-md-3 text-left">
                    <h5>Contacto</h5>
                    <p className="contact-item">
                        <i className="fas fa-envelope"></i> denisbets.info@gmail.com
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

export default Footer
