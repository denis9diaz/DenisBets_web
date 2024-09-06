import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import Logo from "/src/front/img/logo.png";

const Footer = () => (
    <footer className="footer mt-auto py-5 text-center">
        <div className="container">
            <div className="row">
                {/* Primera Columna: Logo */}
                <div className="col-md-4 text-center logo-footer">
                    <img src={Logo} alt="logo" className="image-logo-footer" />
                </div>

                {/* Segunda Columna: Redes Sociales */}
                <div className="col-md-4 text-center social-media">
                    <h5>Sígueme</h5>
                    <a href="https://t.me/mi_canal" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram"></i>
                    </a>
                    <a href="https://instagram.com/mi_perfil" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://tiktok.com/@mi_perfil" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>

                {/* Tercera Columna: Información Adicional */}
                <div className="col-md-4 text-center">
                    <h5>Información</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/aviso-legal">Aviso Legal</Link></li>
                        <li><Link to="/politica-privacidad">Política de Privacidad</Link></li>
                    </ul>
                    <p className="contact-item">
                        <i className="fas fa-envelope"></i> denisbets.info@gmail.com
                    </p>
                </div>
            </div>
            {/* Derechos Reservados */}
            <div className="row mt-3">
                <div className="col text-center">
                    <p className="text-muted">&copy; 2024 DenisBets. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
