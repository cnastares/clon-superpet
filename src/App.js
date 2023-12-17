import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Home/Navbar.js';
import Portada from './Home/Portada.js';
import Carrusel from './Home/Carrusel.js';
import Ofertas from './Home/Ofertas.js';
import Suscripcion from './Home/Suscripcion.js';
import Footer from './Home/Footer.jsx';
import Cabecera from './Informacion/Cabecera.js';
import CabeceraPerro from './Perros_Gatos/CabeceraPerro.js';
import CabeceraGato from './Perros_Gatos/CabeceraGato.js';
import CabeceraCarro from './Carrito/CabeceraCarro.js';
import CabeceraLogin from './Login/CabeceraLogin.js';
//import Login from './Login/Login.js'; // Asegúrate de que este componente y la ruta existan

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Portada /><Carrusel /><Ofertas /><Suscripcion /></>} />
          <Route path="/cabecera" element={<Cabecera />} />
          <Route path="/perros" element={<CabeceraPerro />} />
          <Route path="/gatos" element={<CabeceraGato />} />
          <Route path="/login" element={<CabeceraLogin />} /> {/* Asegúrate de que esta ruta corresponda al carrito de compras */}
          <Route path="/carro" element={<CabeceraCarro />} /> {/* Asegúrate de que esta ruta corresponda al carrito de compras */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
