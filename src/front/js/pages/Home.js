import React from "react";
import HeroSection from "./HeroSection";
import ProblemaSolucion from "./ProblemaSolucion";
import Accion from "./Accion";
import Motivacion from "./Motivacion";
import Encontraras from "./Encontraras";
import fondo from "/src/front/img/fondo.jpg";

const Home = () => {
  const homeStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
    paddingTop: 0,
    textAlign: "center",
  };

  return (
    <div style={homeStyle}>
      <HeroSection />
      <ProblemaSolucion />
      <Accion />
      <Motivacion />
      <Encontraras />
      <Accion />
    </div>
  );
};

export default Home;
