import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-left">
                    <h5>Enlaces Rápidos</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/mimetodo">Mi método</Link></li>
                        <li><Link to="/mihistoria">Mi historia</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 text-left">
                    <h5>Sígueme</h5>
                    <div className="social-icons">
                        <Link to="https://t.me/denisbets"></Link>
                            <i className="fab fa-telegram"></i> Mi Canal de Telegram
                        
                        <Link to="https://instagram.com/denisbets"></Link>
                            <i className="fab fa-instagram"></i> Mi Instagram

                        <Link to="https://tiktok.com/@denisbets"></Link>
                            <i className="fab fa-tiktok"></i> Mi TikTok
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

export default Footer
