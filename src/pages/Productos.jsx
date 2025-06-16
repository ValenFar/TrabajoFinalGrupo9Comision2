import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { Container, Col, Row } from "react-bootstrap";
import { useProductContext } from "../context/ProductContext";

const Productos = () => {
  const { productData } = useProductContext();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <p className="mb-4">Pestaña de productos en general</p>
        <Row className="g-4">
          {productData.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3} >
              <ProductCard productData={producto} />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Productos;
