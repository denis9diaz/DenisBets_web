import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Redes from "./pages/Redes";
import MiHistoria from "./pages/MiHistoria";
import Consejos from "./pages/Consejos";
import Contacto from "./pages/Contacto";
import HeroSection from "./pages/HeroSection";
import ProblemaSolucion from "./pages/ProblemaSolucion";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Servicios />} path="/servicios" />
                        <Route element={<Redes />} path="/redes" />
                        <Route element={<MiHistoria />} path="/mihistoria" />
                        <Route element={<Consejos />} path="/consejos" />
                        <Route element={<Contacto />} path="/contacto" />
                        <Route element={<HeroSection />} path="/hero" />
                        <Route element={<ProblemaSolucion />} path="/hero2" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
