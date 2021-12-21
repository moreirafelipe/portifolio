import { useState } from 'react';
import { ReactComponent as MenuSVG } from '../../assets/icons/menu.svg'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
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
        <Navbar.Brand href="#start" className="bg-black text-info px-2">F<span className="bg-black text-white">(m)</span></Navbar.Brand>
        <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" ><MenuSVG id="mob-icon" /></Navbar.Toggle >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu-list mx-2 fw-bold fs-5">
            <Nav.Link eventKey="1" as={Link} smooth to={"/#start"} className="bg-black text-light menu-item m-1 px-1" >Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} smooth to={"/#projects"} className="bg-black text-light menu-item m-1 px-1" >Projects</Nav.Link>
            <Nav.Link eventKey="3" as={Link} smooth to={"/#habilities"} className="bg-black text-light menu-item m-1 px-1" >Habilities</Nav.Link>
            <Nav.Link eventKey="4" as={Link} smooth to={"/#footer"} className="bg-black text-light menu-item m-1 px-1" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}