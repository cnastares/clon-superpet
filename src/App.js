import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Navbar from './Home/Navbar.js';
import Portada from './Home/Portada.js';
import Carrusel from './Home/Carrusel.js';
import Ofertas from './Home/Ofertas.js';
import Suscripcion from './Home/Suscripcion.js';
import Footer from './Home/Footer.jsx';
import Cabecera from './Informacion/Cabecera.js'; // Importa el componente Cabecera

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Usa Routes en lugar de Switch */}
          <Route path="/" element={<><Portada /><Carrusel /><Ofertas /><Suscripcion /></>} /> {/* Usa el prop 'element' para renderizar tus componentes */}
          <Route path="/cabecera" element={<Cabecera />} /> {/* Renderiza el componente Cabecera cuando la ruta es '/cabecera' */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
