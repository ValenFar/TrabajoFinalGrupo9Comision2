import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../css/App.css";

const NavBar2 = () => {
  return (
    <Navbar className="navbar navbar-expand-lg bg-NavBar rounded">
      <Container className="container-fluid fs-5 ">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/ShoppiNineLogo.png"
            alt="ShoppiNine Logo"
            width="80"
            height="80"
            className="d-inline-block align-top me-2"
    />
          ShoppiNine
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Productos">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Favoritos">
              Mis Favoritos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Editar">
              Edicion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar2;
