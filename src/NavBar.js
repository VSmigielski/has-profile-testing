import React, {useState, useEffect} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import './Navbar.css'

export const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

    return (
        <div>
  <Navbar collapseOnSelect className={scroll ? "bg-dark" : "bg-transparent"} expand="lg" id="custom-nav">
  <Container>
  <Navbar.Brand href="#home">HÀ NGUYỄN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <div className="nav-links-bar">
        <section id="section-1">
          <Nav.Link href="#about">About</Nav.Link>
        </section>
        <section id="section-2">
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </section>
        <section id="section-3">
          <Nav.Link href="#contact" style={{color: 'red!important'}}>Contact</Nav.Link>
        </section>
        <section>
          <Nav.Link className="social-links" href="https://github.com/VSmigielski" target="_blank" title="GitHub Profile" rel="noreferrer">
          <i className="fab fa-github"></i>
          </Nav.Link>
        </section>
        <section>
          <Nav.Link className="social-links" href="https://www.linkedin.com/in/veronica-mccormick-b85025174/" target="_blank" title="LinkedIn Profile" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
          </Nav.Link>
        </section>
        <section>
          <Nav.Link className="social-links" href="" target="_blank" title="Resume" rel="noreferrer">
          <i className="far fa-id-badge"></i>
          </Nav.Link>
        </section>
      
      </div>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
