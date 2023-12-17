import React, { useState, useEffect } from 'react';
import imagen1 from './m1.jpg';
import imagen2 from './m2.jpg';
import imagen3 from './m3.jpg';

function Imgs() {
    const imagenes = [imagen1, imagen2, imagen3];
    const [imagenActual, setImagenActual] = useState(imagenes[0]);
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setImagenActual(imagenActual => {
          const i = imagenes.indexOf(imagenActual);
          return imagenes[(i + 1) % imagenes.length];
        });
      }, 2000); // Cambia la imagen cada 2 segundos
  
      return () => clearInterval(intervalo); // Limpia el intervalo cuando el componente se desmonte
    }, [imagenes]);

    return <img src={imagenActual} alt="Imagen actual" className="imagen-cabecera" />; // Aplica la clase 'imagen-cabecera' a la etiqueta img
}

export default Imgs;
