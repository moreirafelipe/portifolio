import { useState } from 'react';
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

  const NavButton = () => {
    return (
      <div className="menu-icon">
        <input className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }

  return (
    <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} collapseOnSelect expand="lg" variant={colorChange ? 'dark' : 'light'} >
      <Container>
        <Navbar.Brand href="#start" className="bg-black px-2 py-0">F<span className="bg-black text-white">(m)</span></Navbar.Brand>
        <Navbar.Toggle className="navbar-toggle p-1" aria-controls="responsive-navbar-nav" ><NavButton /></Navbar.Toggle >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu-list mt-2 fw-bold fs-5">
            <Nav.Link eventKey="1" as={Link} smooth to={"/#start"} className="bg-black text-light menu-item m-1 px-1" variant="black" ><span>Home</span></Nav.Link>
            <Nav.Link eventKey="2" as={Link} smooth to={"/#projects"} className="bg-black text-light menu-item m-1 px-1" ><span>Projects</span></Nav.Link>
            <Nav.Link eventKey="3" as={Link} smooth to={"/#habilities"} className="bg-black text-light menu-item m-1 px-1" ><span>Habilities</span></Nav.Link>
            <Nav.Link eventKey="4" as={Link} smooth to={"/#footer"} className="bg-black text-light menu-item m-1 px-1" ><span>Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}