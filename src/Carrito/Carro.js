import React, { useState } from 'react';
import './carrito.css'; 

// Imágenes de productos (asegúrate de que las rutas sean correctas)
import imagen1 from './img/1.jpg';
import imagen2 from './img/2.jpg';
import imagen3 from './img/3.jpg';

// Componente Producto individual
function Producto({ nombre, precio, imagen, cantidad, setCantidad }) {
  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  return (
    <div className="producto">
      <img src={imagen} alt={nombre} className="imagen-producto" />
      <div className="detalle-producto">
        <span className="nombre-producto">{nombre}</span>
        <span className="precio-producto">S/{precio.toFixed(2)}</span>
        <div className="cantidad-producto">
          <button onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementar}>+</button>
        </div>
        <span className="total-producto">S/{(precio * cantidad).toFixed(2)}</span>
      </div>
    </div>
  );
}

// Componente Carro principal
function Carro() {
  // Datos de productos ficticios
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Gran Plus Gato Adulto Castrado Salmon y Arroz 10kg", precio: 200.00, imagen: imagen1, cantidad: 1 },
    { id: 2, nombre: "Creamy Treat Tuna & Salmon", precio: 12.90, imagen: imagen2, cantidad: 2 },
    { id: 3, nombre: "Cat It Nibbly Jerky Pollo & Pescado 30gr", precio: 12.90, imagen: imagen3, cantidad: 1 },
  ]);
  const [codigoCupon, setCodigoCupon] = useState('');
  const [descuento, setDescuento] = useState(0);

  const handleCuponChange = (e) => {
    setCodigoCupon(e.target.value);
  };

  const aplicarCupon = () => {
    if (codigoCupon === "DESCUENTO10") {
      setDescuento(0.1); // 10% de descuento
    } else {
      alert("Cupón inválido");
      setDescuento(0); // No aplicar descuento
    }
  };

  const calcularTotal = () => {
    const subtotal = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    return (subtotal - (subtotal * descuento)).toFixed(2);
  };

  const realizarPedido = () => {
    alert(`Pedido realizado con éxito. Total a pagar: S/${calcularTotal()}`);
  };

  return (
    <div className="carro-container">
      <div className="productos-columna">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            cantidad={producto.cantidad}
            setCantidad={(newCantidad) => {
              setProductos(productos.map(p => {
                if (p.id === producto.id) return { ...p, cantidad: newCantidad };
                return p;
              }));
            }}
          />
        ))}
      </div>
      <div className="checkout-columna">
        <div className="cupon">
          <input type="text" value={codigoCupon} onChange={handleCuponChange} placeholder="Código DESCUENTO10" />
          <button onClick={aplicarCupon}>Aplicar</button>
        </div>
        <div className="total">
          <span>Total: S/{calcularTotal()}</span>
          <button onClick={realizarPedido}>Hacer pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Carro;