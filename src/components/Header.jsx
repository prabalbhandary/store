import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto" style={{ gap: "1rem" }}>
            <Nav.Link as={Link} to="/" className="nav-link" style={{ marginRight: '2rem' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link" style={{ marginRight: '2rem' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link" style={{ marginRight: '2rem' }}>Services</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link" style={{ marginRight: '2rem' }}>Products</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" style={{ marginRight: '2rem' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link" style={{ marginRight: '2rem' }}>Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link" style={{ marginRight: '2rem' }}>Register</Nav.Link>
            <Nav.Link as={Link} to='/cart' className='nav-link' style={{marginRight: '2rem'}}>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
