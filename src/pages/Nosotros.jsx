import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import iconG9 from "../assets/images/iconG9.png";

const Nosotros = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4 text-decoration-underline">
        Sobre nosotros
      </h1>

      <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
        <Image
          src="/ShoppiNineLogo.png"
          alt="Logo ShoppiNine"
          fluid
          className="animate__animated animate__zoomIn animate__slow"
          style={{ maxHeight: "220px" }}
        />
        <Image
          src={iconG9}
          alt="Logo Grupo 9"
          fluid
          rounded
          className="animate__animated animate__pulse animate__infinite"
          style={{ maxHeight: "160px" }}
        />
      </div>

      <p className="text-center mx-auto" style={{ maxWidth: "700px" }}>
        Somos un equipo de estudiantes apasionados por la tecnología, la
        programación y el trabajo colaborativo. Este proyecto fue desarrollado
        como parte de la materia <strong>Programación Visual</strong>, donde
        pusimos en práctica nuestras habilidades en diseño de interfaces,
        desarrollo de componentes y gestión de estados. Cada integrante aportó
        sus conocimientos y compromiso para construir una aplicación funcional,
        accesible y bien estructurada.
      </p>
      <p className="text-center mt-4">
        Agradecemos especialmente al <strong>Profesor Ariel Vega</strong> por
        brindarnos los fundamentos teóricos, y al{" "}
        <strong>Profesor Gustavo Sosa</strong> por guiarnos en la aplicación
        práctica de los contenidos. El acompañamiento de ambos fue clave para
        lograr este proyecto.
      </p>
      <p className="text-muted text-center fst-italic">
        <strong>"El mejor código es el que se hace en equipo."</strong>
      </p>

      <h3 className="text-center my-4 fw-bold fs-1">
        Nuestro grupo de desarrolladores:
      </h3>

      <Row xs={1} md={2} lg={4} className="g-4">
        <CardIntegrante
          nombre="Valentín Farfán"
          git="https://github.com/ValenFar"
          correo="mailto:maxy.far@gmail.com"
        />
        <CardIntegrante
          nombre="Jorge Marino"
          git="https://www.github.com/MarinoJorgeLuis"
          correo="mailto:mjorgeluis785@gmail.com"
        />
        <CardIntegrante
          nombre="Elías Tolaba"
          git="https://www.github.com/ElirUu"
          correo="mailto:mailto:eliastoladm@gmail.com"
        />
        <CardIntegrante
          nombre="Lucas Zerpa"
          git="https://www.github.com/Lucaz991"
          correo="mailto:lenkagamine268@gmail.com"
        />
      </Row>
    </Container>
  );
};

export default Nosotros;
