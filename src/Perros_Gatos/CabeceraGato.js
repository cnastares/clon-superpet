
import React, { useState, useEffect } from "react";
import Gato from './Gato.js'; 

// importamos como "imgcabecera" el archivo
import imgcabecera1 from './img/gato1.jpeg';
import imgcabecera2 from './img/gato2.jpg';
import imgcabecera3 from './img/gato3.jpg';

// 1. componente que monstrará un título
function Titulo(){
return (
<h1 className="h1cab"> GATO</h1>
);
}

// 2. componente que mostrará la imagen de la cabecera
function Imagen({ url }){
return (

<img alt="cabecera" src={url} className="imgcab" style={{ height: '800px' , width: '100%' }}/>

);
}

// Componente para mostrar la fecha y hora actual
function FechaHora() {
    const [fechaHora, setFechaHora] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setFechaHora(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formatoCero = (valor) => (valor < 10 ? `0${valor}` : valor);
  
    const hora = formatoCero(fechaHora.getHours());
    const minuto = formatoCero(fechaHora.getMinutes());
    const segundo = formatoCero(fechaHora.getSeconds());
  
    const fecha = `${fechaHora.getDate()}/${fechaHora.getMonth() + 1}/${fechaHora.getFullYear()}`;
  
    return (
      <div className="fecha-hora">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}></div>
        <p style={{ color: 'Black', textAlign: 'center', fontSize: '24px', marginBottom: '-5px'  }}>{`Hora: ${hora}:${minuto}:${segundo}`}</p>
        <p style={{ color: 'Black', textAlign: 'center', fontSize: '24px', margin: '20px' }}>{`Fecha: ${fecha}`}</p>
      </div>
    );
  }

// componente principal
function Cabecera(){
    const [bannerIndex, setBannerIndex] = useState(0);

    useEffect(() => {
        // Configurar intervalo para cambiar la imagen cada segundo
        const intervalId = setInterval(() => {
          setBannerIndex((prevIndex) => (prevIndex + 1) % 3); // Modifica el 2 según el número de imágenes
        }, 1000);
    
        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
      }, []);
    
      const banners = [imgcabecera1, imgcabecera2,imgcabecera3]; 

      return (
        <div className="bloque">
            <Titulo/>
            <Imagen url = {banners[bannerIndex]} />
            <Gato /> {/* Renderiza el componente Gatos debajo de la imagen */}
            <FechaHora />
        </div>
    );
}

// exportamos el componente principal
export default Cabecera;