import React from "react";
import WorldFlag from "react-world-flags";
import "../../styles/privatesection.css";
import cuota from "/src/front/img/cuota.png";
import stake from "/src/front/img/stake.png";
import pick from "/src/front/img/pick.png";

const PrivateSection = () => {
    const pronosticos = [
        {
            id: 1,
            fecha: "04/02/2025",
            partido: "Real Madrid vs Barcelona",
            pronostico: "Ambos marcan",
            cuota: 1.85,
            stake: "1",
            notas: "Buen historial de goles entre estos equipos.",
            tipo: "PRE",
            pais: "ES"  // Código de país (Ej. ES = España)
        }
    ];

    return (
        <div className="private-section">
            <h2 className="private-section-title">Pronósticos Premium</h2>
            {/* Mostrar los pronósticos */}
            {pronosticos.map((pronostico) => (
                <div key={pronostico.id} className="pronostico-card">
                    <p className="fecha">📅 {pronostico.fecha}</p>
                    <div className="partido-pronostico">
                        <h3 className="partido">
                            <WorldFlag code={pronostico.pais} style={{ width: 30, height: 20, marginRight: 10 }} />
                            {pronostico.partido}
                        </h3>
                        <h3 className="pronostico">
                            <span className="icono-pronostico"><img src={pick} className="pick-icon"></img></span>
                            {pronostico.pronostico}
                        </h3>

                        <p className="cuota">
                            <span className="icono-cuota"><img src={cuota} className="cuota-icon"></img></span>
                            @<strong>{parseFloat(pronostico.cuota).toFixed(2)}</strong>
                        </p>

                        <p className="stake">
                            <span className="icono-stake"><img src={stake} className="stake-icon"></img></span>
                            Stake <strong>{pronostico.stake}</strong>
                        </p>
                        <p className="notas">📝 {pronostico.notas}</p>
                        <div className={`badge ${pronostico.tipo === "LIVE" ? "live" : "pre"}`}>
                            {pronostico.tipo === "LIVE" ? "🔴 LIVE" : "📌 PRE-PARTIDO"}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PrivateSection;
