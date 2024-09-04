import React from "react";
import HeroSection from "./HeroSection";
import ProblemaSolucion from "./ProblemaSolucion";
import Accion from "./Accion";
import Motivacion from "./Motivacion";
import "../../styles/home.css";

const Home = () => {
	return (
		<div className="home text-center">
			<HeroSection />
			<ProblemaSolucion />
			<Accion />
			<Motivacion />
		</div>
	);
};

export default Home
