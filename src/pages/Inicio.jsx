import { motion } from "framer-motion";

//React-bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container.js';
import Stack from 'react-bootstrap/Stack';


//Folder components
import BestRating from '../assets/components/BestRating.jsx';
import Carrusel from '../assets/components/Carousel.jsx';

const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <Home />
      </div>
    </motion.div>
  );
};

export default Inicio;


function Home({ }) {
  return (
    <>
    <Carrusel />

    <Stack direction="horizontal"  style={{ margin: '1rem' }}>
        <BestRating categoria="electronics" />
    </Stack >
    <Stack direction="horizontal"  style={{ margin: '1rem' }}>
        <BestRating categoria="men's clothing" />
    </Stack>

    <Container className="g-0 justify-content-md-center m-auto">
        <Row className="g-4">
        {Array.from({ length: 11 }).map((_, idx) => (
            <Col key={idx} xs={6} md={3} >
            <Card>
                <Card.Img variant="top" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </>
  );
}