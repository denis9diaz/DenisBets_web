import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "/src/front/img/logo.png";

const Navbar = () => {
    const collapseRef = useRef(null);

    const handleLinkClick = () => {
        if (collapseRef.current) {
            // Bootstrap uses "collapse" class to show/hide elements
            const collapseElement = collapseRef.current;
            const bsCollapse = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });
            bsCollapse.hide();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/">
                    <img src={Logo} alt="logo" className="imageLogo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/servicios" onClick={handleLinkClick}>
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mimetodo" onClick={handleLinkClick}>
                                Mi método
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/redes" onClick={handleLinkClick}>
                                Sígueme
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mihistoria" onClick={handleLinkClick}>
                                Sobre mi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto" onClick={handleLinkClick}>
                                Escríbeme
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
