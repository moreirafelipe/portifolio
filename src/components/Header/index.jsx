import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './styles.scss'

export default function Header() {

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} collapseOnSelect expand="lg" variant={colorChange ? 'dark' : 'light'} >
      <Container>
        <Navbar.Brand href="#start">F<span>(m)</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold fs-5">
            <Nav.Link href="#start">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#habilities">Habilities</Nav.Link>
            <Nav.Link href="#about">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}