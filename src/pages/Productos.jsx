import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { Container, Col, Row } from "react-bootstrap";
import useProductContext from '../hooks/useProductContext';

const Productos = () => {
  const { products } = useProductContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container className="mt-4">
        <h2>Productos</h2>
        <Row className="g-4">
          {products.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard productData={producto} />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Productos;
