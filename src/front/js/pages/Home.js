import React from "react";
import HeroSection from "./HeroSection";
import ProblemaSolucion from "./ProblemaSolucion";
import "../../styles/home.css";

const Home = () => {
	return (
		<div className="home text-center mt-5">
			<HeroSection />
			<ProblemaSolucion />
		</div>
	);
};

export default Home
