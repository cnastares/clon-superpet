import React, { useState } from "react";
import vida_acuatica from './vidaGato.js';

const ternasDeImagenes = [
  {
    titulo: "Alimentos",
    imagenes: vida_acuatica.slice(0, 3),
    palabras: ["Canbo Adulto Cordero Razas Med/Gran Alimento Seco Perro -> S/217.90", "Wellness Core Perro Healthy Weight Alimento Seco Perro  S/299.90", "ProPlan Adult Lamb Adulto Cordero 15.9 kg -> S/340.00"]
  },
  {
    titulo: "Salud e Higiene",
    imagenes: vida_acuatica.slice(3, 6),
    palabras: ["Nexgard Spectra L X 3 Tab (15 30 Kg) -> S/144.54", "Fv Hydra Plex Shampoo Cachorro (Volumen Fluffy) 945 Ml -> S/59.90", "Mpets Pañales para hembra  S/39.90"]
  },
  {
    titulo: "Juguetes y Accesorios",
    imagenes: vida_acuatica.slice(6, 9),
    palabras: ["Bunny Color Vino Con Beige  S/175.90", "Funbone hueso verde   - S/19.90", "Manta Dream Color Menta  S/50.90"]
  }
];

function Titulo({ texto }) {
  return (
    <h1 className="h1cab" style={{ marginBottom: '20px' }}>{texto}</h1>
  );
}

function Cuerpo() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="divseccion">
      {ternasDeImagenes.map((terna, index) => (
        <div key={index}>
          <Titulo texto={terna.titulo} />
          <div style={{ display: 'flex' }}>
            {terna.imagenes.map((imagen, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  flex: '1',
                  textAlign: 'center',
                  overflow: 'hidden', // Asegura que la imagen no se desborde del contenedor
                  height: '500px', // Ajusta la altura según tus preferencias
                }}
                onMouseEnter={() => setHoveredImage(imagen)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  className="imgseccion"
                  alt={imagen}
                  src={imagen}
                  style={{
                    opacity: hoveredImage === imagen ? 0 : 1,
                    width: '90%',
                    height: '140%',
                    objectFit: 'cover', // Controla cómo se ajusta la imagen dentro del contenedor
                    objectPosition: 'center center',
                  }}
                />
                {hoveredImage === imagen && (
                  <p style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    zIndex: 1,
                  }}>
                    {terna.palabras[i]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cuerpo;
