import React from "react";
import { motion } from "framer-motion";
import { useFavs } from "../context/FavsContext";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProducFavs = () => {
  const { favoritos } = useFavs(); // esto se vuelve a renderizar cuando favoritos cambia

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container className="mt-4">
        <h2>Mis Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>No tenés productos marcados como favoritos.</p>
        ) : (
          <Row>
            {favoritos.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <ProductCard productData={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </motion.div>
  );
};

export default ProducFavs;
