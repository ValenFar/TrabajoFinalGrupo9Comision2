import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImage from '../assets/images/ERROR404.png';

const Error = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="p-4 bg-light shadow-lg text-center animate__animated animate__fadeIn" style={{ maxWidth: '600px', width: '100%' }}>
            <h1 className="display-4 fw-bold mb-3">Error 404</h1>
                <p className="fs-5 text-muted animate__animated animate__fadeInDown">
                    Parece que te perdiste en el ciberespacio...
                </p>

    <div className="d-flex justify-content-center">
        <img
            src={errorImage}
            alt="Error 404"
            className="img-fluid my-3 animate__animated animate__shakeX"
            style={{ maxWidth: "300px" }}
        />
    </div>


        <p className="mb-4 px-3 text-muted">
            Este error suele ocurrir cuando la URL ingresada no coincide con nuestras rutas.
            Verificá que esté bien escrita o volvé al inicio.
        </p>

        <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-primary">
                Volver al Inicio
            </Link>
        <a href="mailto:maxy.far@gmail.com" className="btn btn-outline-secondary">
            Reportar error
        </a>
        </div>
            </Card>
        </Container>
    );
};

export default Error;
