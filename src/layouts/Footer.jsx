import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3 rounded">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">© 2025 Grupo 9 Trabajo Integrador.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Link to="Nosotros" className="text-white text-decoration-none me-3"> 
              Nosotros 
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
