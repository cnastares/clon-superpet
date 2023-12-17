import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoImage from './Logo.png'; 



function MyNavbar() {
  useEffect(() => {
    const handleScroll = () => {
      const sc = window.scrollY;
      if (sc > 150) {
        document.getElementById("main-navbar").classList.add("navbar-scroll");
      } else {
        document.getElementById("main-navbar").classList.remove("navbar-scroll");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar id="main-navbar" collapseOnSelect expand="lg" fixed="top">
      <Container>
      <Navbar.Brand href="#" className="navbar-logo">
      <img src={logoImage} alt="Logo" className="logo-image" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/perros" className="nav-link">Perros</Link>
            <Link to="/gatos" className="nav-link">Gatos</Link>
            <Link to="/cabecera" className="nav-link">Información</Link>
            <Nav.Link href="#contact">Veterinarias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="top-social">
          <ul id="top-social-menu">
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faSignInAlt} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
