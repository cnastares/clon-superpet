import React, { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar.js'; 
import './Cabecera.css';
import imagenCabecera from './infoM.jpg'; 
import Imgs from './Imagenes.js'; // Importa el componente Imgs

function CabeceraInfo() {
  const [color, setColor] = useState('blue');

  useEffect(() => {
    const timer = setInterval(() => {
      setColor(prevColor => prevColor === 'blue' ? 'green' : 'blue');
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Navbar /> {/* Usa el componente Navbar */}
      <img src={imagenCabecera} alt="Descripción de la imagen" style={{ width: '100%' }} /> 
      <h1 style={{ color: color }}>Al cuidar de tu mascota puedes mejorar tu salud física y mental</h1>      
      <p>¿Sabías que la hormona Oxitocina, que se secreta cuando el cuerpo experimenta placer, también se secreta cuando una mascota y su dueño experimentan interacciones positivas entre si?
      Entre más fuerte sea el vínculo entre la persona y su mascota, mayor es la posibilidad de que la persona secrete esta hormona, creando estados de felicidad y también de salud. 
      Se encuentra comprobado que al tener una estrecha relación con tu mascota e interactuar con esta regularmente, aparecen una serie de beneficios en tu vida. Por ejemplo, acariciar a una mascota por aproximadamente 10 minutos o más puede aliviar rápidamente el estrés cotidiano y bajar tu presión arterial. 
      La compañía de tu mascota también puede mejorar tu salud mental al evitar depresiones. 
      Estudios demuestran que las personas que cuidan de sus mascotas también podrían ser más saludables, a razón que al sacarlos a caminar o correr y también jugar activamente con ellos se hace ejercicio teniendo un impacto positivo en su cuerpo y mente. 
      En particular se han demostrado beneficios de salud al disminuir la tasa de problemas cardiovasculares. 
      Muy específicamente los perros también pueden ayudar a las personas con ciertos problemas de salud como la epilepsia y el cáncer, ya que ciertos perros se pueden entrenar a detectar estos problemas antes de que ocurran o justo en el momento en el cuál se está comenzando.</p>
    <h2 style={{ color: color }}>A continuación te listamos una serie de beneficios que podría traer el cuidar de tus perros: </h2>        
    <ol>
    <li>Menos enfermedades</li>
    <li>Más resistencia a las alergias</li>
    <li>Mayor felicidad</li>
    <li>Un corazón saludable</li>
    <li>Más ejercicio</li>
    <li>Vida social más activa</li>
    <li>Disminución del estrés</li>
  </ol>

  <h2 style={{ color: color }}>Cuidados médicos esenciales para proteger a tu mascota</h2>        
  <p>¿Sabías que al cuidar de tu mascota estás cuidando de tu familia? </p>
        <p>Al igual que un niño, tus mascotas necesitan de cuidados médicos desde sus primeras semanas de vida. De lo contrario pueden llegar a contagiarse de posibles parásitos y enfermedades que consecuentemente pueden llegar a enfermar a tu familia.  
            Por lo tanto, proteger a tu familia significa darle a tu mascota buena salud.  </p>
            <Imgs className="imagen-cabecera" /> 
    </div>
  );
}

export default CabeceraInfo;
