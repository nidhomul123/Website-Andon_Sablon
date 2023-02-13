import React from "react";
// eslint-disable-next-line
import {Navbar,Nav, Container,Row,Col } from "react-bootstrap";
// eslint-disable-next-line
import { useEffect, useState } from "react";


const NavbarAndon = () => {
   
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 0) {
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll",changeBackgroundColor);
  })
    return <div className="sticky-top">
      <Navbar bg="dark" expand="lg" variant="dark" className={changeColor ? "color-active" : "dark"}>
    <Container>
      <Navbar.Brand href="#home" className="text-White-50 fw-bold fs-4">Nyablon Yuk!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="mx-2">About</Nav.Link>
          <Nav.Link href="#category" className="mx-2">Category</Nav.Link>
          <Nav.Link href="#service" className="mx-2">Service</Nav.Link>
          <Nav.Link href="#faq" className="mx-2">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
}


export default NavbarAndon;