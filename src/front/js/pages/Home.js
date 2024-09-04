import React from "react";
import Accion from "./Accion";
import HeroSection from "./HeroSection";
import ProblemaSolucion from "./ProblemaSolucion";
import "../../styles/home.css";

const Home = () => {
	return (
		<div className="home text-center">
			<HeroSection />
			<ProblemaSolucion />
			<Accion />
		</div>
	);
};

export default Home
