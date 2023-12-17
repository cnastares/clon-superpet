import React, { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar.js'; 
import './carrito.css'; // Asume que tienes un archivo carrito.css para tus estilos

const Carrito = () => {
  // Estados para manejar la cantidad de cada producto y el código de cupón
  const [cantidades, setCantidades] = useState({ producto1: 1, producto2: 2, producto3: 1, producto4: 1 });
  const [codigoCupon, setCodigoCupon] = useState('');

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = (producto, cantidad) => {
    setCantidades({ ...cantidades, [producto]: cantidad });
  };

  // Función para manejar la entrada del cupón
  const manejarCupon = (e) => {
    setCodigoCupon(e.target.value);
  };

  // Función para manejar la realización del pedido
  const realizarPedido = () => {
    // Aquí iría la lógica para procesar el pedido
    console.log('Realizando pedido con los siguientes datos:', cantidades, codigoCupon);
  };

  return (
    <div className="carrito-container">
      {/* Lista de productos */}
      <div className="producto">
        <p>Gran Plus Gato Adulto Castrado Salmon y Arroz 10kg</p>
        <p>Precio: S/200.00</p>
        {/* Aquí podrías tener componentes más pequeños para la cantidad y el precio, por ejemplo */}
      </div>
      {/* Repetir para cada producto */}
      
      {/* Campo para el cupón */}
      <div className="cupon">
        <input type="text" value={codigoCupon} onChange={manejarCupon} placeholder="Código cupón" />
        <button onClick={() => {/* lógica para aplicar el cupón */}}>Aplicar</button>
      </div>
      
      {/* Total y botón para realizar pedido */}
      <div className="total">
        <p>Total: S/251.60</p>
        <button onClick={realizarPedido}>Hacer pedido</button>
      </div>
    </div>
  );
};

export default Carrito;
