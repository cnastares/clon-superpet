import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Home/Navbar.js';
import Portada from './Home/Portada.js';
import Carrusel from './Home/Carrusel.js';
import Ofertas from './Home/Ofertas.js';
import Suscripcion from './Home/Suscripcion.js';
import Footer from './Home/Footer.jsx';
import Cabecera from './Informacion/Cabecera.js';
import CabeceraPerro from './Perros_Gatos/CabeceraPerro.js'; // Importa el componente CabeceraPerro
import CabeceraGato from './Perros_Gatos/CabeceraGato.js'; // Importa el componente CabeceraGato

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Portada /><Carrusel /><Ofertas /><Suscripcion /></>} />
          <Route path="/cabecera" element={<Cabecera />} />
          <Route path="/perros" element={<CabeceraPerro />} /> {/* Renderiza el componente CabeceraPerro cuando la ruta es '/perros' */}
          <Route path="/gatos" element={<CabeceraGato />} /> {/* Renderiza el componente CabeceraGato cuando la ruta es '/gatos' */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
