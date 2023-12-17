import React from 'react';
import './ofertas.css';
import imagen1 from './ofertas1.jpg';
import imagen2 from './ofertas2.jpg';

function Ofertas() {
    return (
        <div className="ofertas">
            <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>¡Lleva más, paga menos con estas ofertas!</h1> {/* Aquí está tu título */}
            <div className="ofertas__imagenes">
                <img src={imagen1} alt="Oferta 1" className="oferta" />
                <img src={imagen2} alt="Oferta 2" className="oferta" />
            </div>
        </div>
    );
}

export default Ofertas;