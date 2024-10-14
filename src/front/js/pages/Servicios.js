import React, { useEffect, useState } from "react";
import "../../styles/servicios.css";

const services = [
    {
        plan: "Servicio mensual",
        price: "30,00€/mes",
        afterPrice: "Esta opción te da acceso a mis pronósticos por 30 días",
        benefits: [
            "Acceso a todos mis pronósticos",
            "30-60 pronósticos mensuales",
            "Soporte y contacto directo conmigo"
        ]
    },
    {
        plan: "Servicio anual",
        price: "260,00€/año",
        afterPrice: "La mejor opción a largo plazo. Ahorras 100€/año",
        benefits: [
            "Acceso a pronósticos durante un año",
            "Más de 300 pronósticos anuales",
            "Prioridad en soporte"
        ]
    },
    {
        plan: "Servicio diario",
        price: "1,50€/pronóstico",
        afterPrice: "Opción para probar mis servicios días sueltos",
        benefits: [
            "Acceso a los pronósticos que compres",
            "Únicamente 2€ por pronóstico",
            "No hay soporte directo",
        ]
    }
];

const Servicios = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="servicios text-center">
            <div className="container">
                <div className="row justify-content-center">
                    {services.map((service, index) => (
                        <div
                            className={`col-md-4 col-sm-6 mb-4 d-flex ${
                                show ? 'show' : ''
                            }`}
                            key={index}
                        >
                            <div className={`servicios-card h-100 servicios-fade-in`}>
                                <div className="pricing-block-content">
                                    <p className="servicios-plan">{service.plan}</p>
                                    <div className="servicios-price">
                                        <p className="price-number">{service.price}</p>
                                    </div>
                                    <div className="servicios-note">{service.afterPrice}</div>
                                    <ul className="servicios-check-list" role="list">
                                        {service.benefits.map((benefit, idx) => (
                                            <li className="servicios-check-list-item" key={idx}>
                                                <svg
                                                    version="1.0"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    height="16"
                                                    viewBox="0 0 30 30.000001"
                                                    zoomAndPan="magnify"
                                                    width="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ color: "rgb(102, 78, 255)" }}
                                                >
                                                    <defs>
                                                        <clipPath id={`id${idx}`}>
                                                            <path
                                                                fill="#664eff"
                                                                clipRule="nonzero"
                                                                d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                                                            ></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g clipPath={`url(#id${idx})`}>
                                                        <path
                                                            fillRule="nonzero"
                                                            fillOpacity="1"
                                                            d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                                                            fill="#664eff"
                                                        ></path>
                                                    </g>
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="servicios-button-want">¡Lo quiero!</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content mt-5 div-parrafos">
                    <p className="parrafo-servicios">
                        Si contratas el servicio mensual o el anual, al realizar el pago serás añadido a un canal de Telegram donde publicaré los pronósticos.
                    </p>
                    <p className="parrafo-servicios">
                        Si contratas el servicio diario, te llegará un enlace donde estarán únicamente los pronósticos que hayas contratado.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Servicios;
