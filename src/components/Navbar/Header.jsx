import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/add">
            <Nav.Link href="#features">Add todo</Nav.Link>
          </Link>
          <Link to="/todos">
            <Nav.Link href="#pricing">Todo list</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
