import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "../../styles/contacto.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        subject: '',
        message: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.BACKEND_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: '¡Email enviado!',
                        text: 'Te responderé lo antes posible.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/');
                        }
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Message sent:', data);
            })
            .catch(error => {
                console.log('Error sending message:', error);
            });
    };

    return (
        <div className="contacto text-center">
            <div className="contact section">
                <h2 className="contact-title">Contacto</h2>
                <p className="contact-description">Si tienes cualquier pregunta no dudes en escribirme</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="text" id="username" placeholder="Tu email" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Asunto</label>
                        <input type="text" id="subject" placeholder="Asunto" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" rows="5" placeholder="Escribe aquí tu mensaje" required onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Enviar mensaje</button>
                </form>
                <div className="additional-contact-info">
                    <p>También puedes contactarme en:</p>
                    <ul>
                        <li className="correo-contacto">
                            <i className="fas fa-envelope"></i>
                            denisbets.info@gmail.com
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/mi_perfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-instagram"
                            >
                                <i className="fab fa-instagram"></i> Mi Instagram
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Contact;
