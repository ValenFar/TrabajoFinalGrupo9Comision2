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
            className="animate__animated animate__pulse animate__infinite"
            style={{ maxHeight: '200px' }}
        />
    </div>

    <p className="text-center mx-auto" style={{ maxWidth: '700px' }}>
        Somos un equipo de estudiantes apasionados por la tecnología, la programación y el trabajo colaborativo.
        Este proyecto fue desarrollado como parte de la materia <strong>Programación Visual</strong>, donde
        pusimos en práctica nuestras habilidades en diseño de interfaces, desarrollo de componentes y gestión de estados.
        Cada integrante aportó sus conocimientos y compromiso para construir una aplicación funcional, accesible y bien estructurada.
    </p>
    <p className="text-center mt-4">
        Agradecemos especialmente al <strong>Profesor Ariel Vega</strong> por brindarnos los fundamentos teóricos,
        y al <strong>Profesor Gustavo Sosa</strong> por guiarnos en la aplicación práctica de los contenidos. 
        El acompañamiento de ambos fue clave para lograr este proyecto.
    </p>
    <p className="text-muted text-center fst-italic">
        <strong>"El mejor código es el que se hace en equipo."</strong>
    </p>

    <h3 className="text-center my-4 fw-bold fs-1">
        Nuestro grupo de desarrolladores:
    </h3>

    <Row xs={1} md={2} lg={4} className="g-4">
        {/* Valentín Farfán */}
        <Col>
            <Card className="text-center h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
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
            <Card className="text-center h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
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
            <Card className="text-center h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
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
            <Card className="text-center h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
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