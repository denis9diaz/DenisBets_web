import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "/src/front/img/logo.png"

export const Navbar = () => {
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
								Consejos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/redes">
								Redes
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/mihistoria">
								Mi historia
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contacto">
								Escríbeme
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								to="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</Link>
							<ul className="dropdown-menu">
								<li>
									<Link className="dropdown-item" to="#">
										Action
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="#">
										Another action
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link className="dropdown-item" to="#">
										Something else here
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
