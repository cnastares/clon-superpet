import React, { useEffect, useRef } from 'react';
import './carrusel.css';
import imagen1 from './cambo.jpg';
import imagen2 from './bravery.png'; 
import imagen3 from './clauders.png'; 
import imagen4 from './hills.png'; 
import imagen5 from './origens.png'; 
import imagen6 from './purina.jpg'; 
import imagen7 from './taste.png'; 

function Carrusel() {
    const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7]; // Añade todas las imágenes que quieras mostrar en el carrusel
    const slideTrackRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (slideTrackRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = slideTrackRef.current;
                if (scrollLeft + clientWidth >= scrollWidth / 2) {
                    slideTrackRef.current.scrollLeft = 0;
                } else {
                    slideTrackRef.current.scrollLeft += clientWidth;
                }
            }
        }, 2000); // Cambia la imagen cada 2 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <div className="slider">
            <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>Nuestras mejores marcas</h1> {/* Aquí está tu título */}
            <div className="slide-track" ref={slideTrackRef}>
                {imagenes.concat(imagenes).map((imagen, index) => ( // Duplica las imágenes en la pista del carrusel
                    <div className="slide" key={index}>
                        <img src={imagen} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrusel;