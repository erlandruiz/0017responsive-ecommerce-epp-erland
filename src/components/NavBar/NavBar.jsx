import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";
import { Container } from "react-bootstrap";

import { AiFillHome } from "react-icons/ai";

import { HiInformationCircle } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary epp-navbar">
        <Container className="epp-navbar-container rounded-3">
          <Navbar.Brand href="#home">EPP-Peru</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="epp-navbar-menu">
                <AiFillHome />
                Inicio
              </Nav.Link>

              <Nav.Link href="#link" className="epp-navbar-menu">
                <HiInformationCircle />
                Nosotros
              </Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  className="epp-navbar-navdropdown-item"
                >
                  Protección de cabeza
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="epp-navbar-navdropdown-item"
                >
                  Protección auditiva
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="epp-navbar-navdropdown-item"
                >
                  Protección de manos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  className="epp-navbar-navdropdown-item"
                >
                  Todos los productos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="epp-navbar-menu">
                <MdEmail />
                Contáctanos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
