import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image
} from "react-bootstrap";

const Nosotros = () => {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4 text-decoration-underline">
                Sobre nosotros
            </h1>
            <h2 className="text-center fs-1">Somos el GRUPO 9</h2>

    <div className="text-center my-3">
        <Image
            src="/iconG9.png"
            alt="Logo Grupo 9"
            fluid
            rounded
            style={{ maxHeight: '200px' }}
        />
    </div>

    <p className="text-center mx-auto" style={{ maxWidth: '700px' }}>
        Somos un equipo de 4 estudiantes, todos comprometidos con el desarrollo web y el
        aprendizaje colaborativo. Este proyecto fue desarrollado en el marco de
        la materia <strong>Programación Visual</strong>, en donde aplicamos
        nuestras habilidades en diseño, programación visual, lógica y código.
    </p>

    <h3 className="text-center my-4 fw-bold fs-1">
        Nuestro grupo de desarrolladores:
    </h3>

    <Row xs={1} md={2} lg={4} className="g-4">
        {/* Valentín Farfán */}
        <Col>
            <Card className="text-center h-100 shadow-sm border-0 transition-hover">
                <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>Valentín Farfán</Card.Title>
                    <Card.Text>Desarrollador</Card.Text>
                </div>
                <div className="d-grid gap-2">
                <Button
                    variant="outline-primary"
                    href="mailto:maxy.far@gmail.com"
                    className="mt-3"
                >
                    Correo de contacto
                </Button>
                <Button
                    variant="dark"
                    href="https://www.github.com/ValenFar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Perfil de GitHub
                </Button>
                </div>
                </Card.Body>
            </Card>
        </Col>

        {/* Jorge Marino */}
        <Col>
            <Card className="text-center h-100 shadow-sm border-0 transition-hover">
                <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>Jorge Marino</Card.Title>
                    <Card.Text>Desarrollador</Card.Text>
                </div>
            <div className="d-grid gap-2">
                <Button
                    variant="outline-primary"
                    href="mailto:mjorgeluis785@gmail.com"
                    className="mt-3"
                >
                Correo de contacto
                </Button>
                <Button
                    variant="dark"
                    href="https://www.github.com/MarinoJorgeLuis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Perfil de GitHub
                </Button>
            </div>
                    </Card.Body>
                </Card>
            </Col>

        {/* Elías Tolaba */}
        <Col>
            <Card className="text-center h-100 shadow-sm border-0 transition-hover">
                <Card.Body className="d-flex flex-column justify-content-between">
            <div>
                <Card.Title>Elías Tolaba</Card.Title>
                <Card.Text>Desarrollador</Card.Text>
            </div>
            <div className="d-grid gap-2">
                <Button
                variant="outline-primary"
                href="mailto:eliastoladm@gmail.com"
                className="mt-3"
                >
                Correo de contacto
                </Button>
                <Button
                variant="dark"
                href="https://www.github.com/ElirUu"
                target="_blank"
                rel="noopener noreferrer"
                >
                Perfil de GitHub
                </Button>
            </div>
                </Card.Body>
            </Card>
        </Col>

        {/* Lucas Zerpa */}
        <Col>
            <Card className="text-center h-100 shadow-sm border-0 transition-hover">
                <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>Lucas Zerpa</Card.Title>
                    <Card.Text>Desarrollador</Card.Text>
                </div>
            <div className="d-grid gap-2">
                <Button
                    variant="outline-primary"
                    href="mailto:lenkagamine268@gmail.com"
                    className="mt-3"
                >
                    Correo de contacto
                </Button>
                <Button
                    variant="dark"
                    href="https://www.github.com/Lucaz991"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Perfil de GitHub
                </Button>
            </div>
                </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
    );
};

export default Nosotros;