import React from 'react';
import './Suscripcion.css';
import imagen from './Registro.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function Suscripcion() {
    return (
        <div className="suscripcion">
            <img src={imagen} alt="Imagen de suscripción" className="suscripcion__imagen" />
            <div className="suscripcion__contenido">
                <h1>Suscribete a nuestro Newsletter</h1>
                <form className="suscripcion__formulario">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" className="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                </form>
                <button className="suscripcion__boton">Registrate</button>
            </div>
        </div>
    );
}

export default Suscripcion;
