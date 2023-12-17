import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Acerca de Nosotros</h4>
                        <ul>
                            <li><a href="#">Mision y Vision</a></li>
                            <li><a href="#">Politica de Privacidad</a></li>
                            <li><a href="#">Legales</a></li>
                            <li><a href="#">Terminos y condiciones</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Obten ayuda</h4>
                        <ul>
                            <li><a href="#">Atención via Whatssapp </a></li>
                            <li><a href="#">Devoluciones</a></li>
                            <li><a href="#">Métodos de Pago</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">Alimentos para Perros</a></li>
                            <li><a href="#">Alimentos para Gatos</a></li>
                            <li><a href="#">Cuidado de tu mascota</a></li>
                            <li><a href="#">Veterinarias</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
