import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "/src/front/img/logo.png"

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img src={Logo} alt="logo" className="imageLogo" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
						<FontAwesomeIcon icon={faBars} />
					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/servicios">
								Servicios
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/consejos">
								Mi método
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/redes">
								Redes
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/mihistoria">
								Sobre mi
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contacto">
								Escríbeme
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar
