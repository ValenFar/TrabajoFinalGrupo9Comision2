import "./css/App.css";
import AppRouter from "./router/Router";
import NavBar2 from "./layouts/Navbar2";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./layouts/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const ubicacion = useLocation();
  const esLogin = ubicacion.pathname === "/Login";

  // para login 
  if (esLogin) {
    return (
      <div className="bg-app min-vh-100 d-flex justify-content-center align-items-center">
        <AppRouter />
      </div>
    );
  }

  // cualquier ruta
  return (
    <Container fluid className="bg-app min-vh-100 d-flex flex-column">
      <Row className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Col xs={12} md={11} lg={10} xl={10} xxl={9}>
          <div
            className="bg-white rounded shadow p-3 m-3 d-flex flex-column"
            style={{ minHeight: "90vh" }}
          >
            <NavBar2 />
            <div className="flex-grow-1">
              <AppRouter />
            </div>
            <Footer />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
