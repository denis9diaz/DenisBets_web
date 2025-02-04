import React, { useState } from "react";
import WorldFlag from "react-world-flags";  // Librería para mostrar banderas
import "../../styles/privatesection.css";

const PrivateSection = () => {
    // Estado para manejar los pronósticos
    const [pronosticos, setPronosticos] = useState([
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
    ]);

    // Estado para el formulario
    const [nuevoPronostico, setNuevoPronostico] = useState({
        fecha: "",
        partido: "",
        pronostico: "",
        cuota: "",
        stake: "",
        notas: "",
        tipo: "PRE",
        pais: "ES" // Valor predeterminado
    });

    // Función para manejar los cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoPronostico({
            ...nuevoPronostico,
            [name]: value,
        });
    };

    // Función para agregar un nuevo pronóstico
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoPronosticoConId = {
            ...nuevoPronostico,
            id: pronosticos.length + 1, // Generamos un id único
        };
        setPronosticos([...pronosticos, nuevoPronosticoConId]);
        setNuevoPronostico({
            fecha: "",
            partido: "",
            pronostico: "",
            cuota: "",
            stake: "",
            notas: "",
            tipo: "PRE",
            pais: "ES",
        }); // Limpiar el formulario
    };

    return (
        <div className="private-section">
            <h2 className="private-section-title">Pronósticos Premium</h2>

            {/* Mostrar los pronósticos */}
            {pronosticos.map((pronostico) => (
                <div key={pronostico.id} className="pronostico-card">
                    <p className="fecha">📅 {pronostico.fecha}</p>
                    <div className="partido-pronostico">
                        <h3 className="partido">
                            {/* Reemplazar el icono 🏴 por la bandera del país */}
                            <WorldFlag code={pronostico.pais} style={{ width: 30, height: 20, marginRight: 10 }} />
                            {pronostico.partido}
                        </h3>
                        <h3 className="pronostico">⚽ {pronostico.pronostico}</h3>
                    </div>
                    <p className="cuota">💲 @<strong>{parseFloat(pronostico.cuota).toFixed(2)}</strong></p>
                    <p className="stake">📊 Stake <strong>{pronostico.stake}</strong></p>
                    <p className="notas">📝 {pronostico.notas}</p>
                    <div className={`badge ${pronostico.tipo === "LIVE" ? "live" : "pre"}`}>
                        {pronostico.tipo === "LIVE" ? "🔴 LIVE" : "📌 PRE-PARTIDO"}
                    </div>
                </div>
            ))}

            {/* Formulario para agregar nuevos pronósticos */}
            <h3>Agregar nuevo pronóstico</h3>
            <form onSubmit={handleSubmit}>
                <label>Fecha:</label>
                <input
                    type="text"
                    name="fecha"
                    value={nuevoPronostico.fecha}
                    onChange={handleChange}
                    required
                />
                <label>Partido:</label>
                <input
                    type="text"
                    name="partido"
                    value={nuevoPronostico.partido}
                    onChange={handleChange}
                    required
                />
                <label>Pronóstico:</label>
                <input
                    type="text"
                    name="pronostico"
                    value={nuevoPronostico.pronostico}
                    onChange={handleChange}
                    required
                />
                <label>Cuota:</label>
                <input
                    type="text"
                    name="cuota"
                    value={nuevoPronostico.cuota}
                    onChange={handleChange}
                    required
                />
                <label>Stake:</label>
                <input
                    type="text"
                    name="stake"
                    value={nuevoPronostico.stake}
                    onChange={handleChange}
                    required
                />
                <label>Notas:</label>
                <input
                    type="text"
                    name="notas"
                    value={nuevoPronostico.notas}
                    onChange={handleChange}
                />
                <label>Tipo:</label>
                <select
                    name="tipo"
                    value={nuevoPronostico.tipo}
                    onChange={handleChange}
                    required
                >
                    <option value="PRE">PRE-PARTIDO</option>
                    <option value="LIVE">LIVE</option>
                </select>

                <label>Selecciona el País:</label>
                <select
                    name="pais"
                    value={nuevoPronostico.pais}
                    onChange={handleChange}
                    required
                >
                    <option value="ES">España</option>
                    <option value="GB">Reino Unido</option>
                    <option value="FR">Francia</option>
                    <option value="DE">Alemania</option>
                    {/* Puedes agregar más países aquí */}
                </select>

                <button type="submit">Agregar Pronóstico</button>
            </form>
        </div>
    );
};

export default PrivateSection;
