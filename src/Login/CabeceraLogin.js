import { Link } from 'react-router-dom';

import React from 'react';
import './CabeceraLogin.css'; // Asume que tienes un archivo CSS para tus estilos
import Carrito from './Login.js'; // Asume que Carro.js exporta un componente llamado Carrito
import primeraImagen from './img/registro.jpg';



function CabeceraLogin() {
  return (
    <>
      <div className="cabecera-carro">
      <img src={primeraImagen} alt="Descuento" className="cabecera-imagen" />

        <div className="cabecera-info">
          <span className="cabecera-titulo">Mi Carrito</span>
            <Link to="/tienda" className="seguir-comprando">Sigue comprando</Link>
        <a href="tel:01-641-6464" className="ayuda">¿Te ayudamos? Llama al 01-641-6464</a>
        </div>
      </div>
      <div className="bloque">
        {/* Renderiza el componente Carrito */}
        <Carrito />
      </div>
    </>
  );
}

export default CabeceraLogin;
