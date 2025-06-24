import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import "../css/App.css";

import useAuth from '../hooks/useAuth';
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Overlay from '../components/Overlay.jsx'

const NavBar2 = () => {
  const { isAuthenticated, logout, user } = useAuth();
  
  return (
    <Navbar expand="md" className="navbar navbar-expand-lg bg-NavBar rounded" >
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
            
            {
            isAuthenticated &&
            (
              <Nav.Link as={NavLink} to="/Favoritos">
                Mis Favoritos
              </Nav.Link>
            )}
            {
            isAuthenticated && user.rol === "Admin" &&
            (
              <Nav.Link as={NavLink} to="/Editar">
                Edicion
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/Nosotros">
              Nosotros
            </Nav.Link>
          </Nav>


          {
            isAuthenticated ? (
              <Nav.Link as={NavLink} to="/">
                <Overlay mensaje="Salir de la cuenta" direction="top" >
                  <Button variant="danger" onClick={logout}>
                    <strong>{user.username}</strong>
                    <IoLogOut style={{width: '30px', padding: '0px' ,paddingLeft: '7px', height: 'fit-content'}} />
                  </Button>
                </Overlay>
              </Nav.Link>
            )
            :
            <Nav.Link as={NavLink} to="/Login">
              <Button variant="dark">
                <FaUser style={{width: '20px', paddingRight: '7px'}} />
                Iniciar Sesión
              </Button>
            </Nav.Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar2;

