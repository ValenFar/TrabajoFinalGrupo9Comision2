import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useFavs } from "../context/FavsContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ productData }) => {
  const [modalShow, setModalShow] = useState(false);
  const { toggleFavorito, isFavorito } = useFavs();

  if (!productData) return <p>Cargando...</p>;

  const handleToggleFavorito = () => {
    toggleFavorito(productData);
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card.Img
          variant="top"
          src={productData.image}
          alt={productData.title}
          className="p-2 bg-light"
          style={{ height: "180px", objectFit: "contain" }}
        />

        <Card.Body className="d-flex flex-column flex-grow-1">
          <Card.Title style={{ fontSize: "19px" }}>{productData.title}</Card.Title>
          <Card.Text className="text-success" style={{ fontSize: "14px" }}>
            ${productData.price}
          </Card.Text>

          <div className="d-flex gap-2 mt-auto">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Detalles
            </Button>

            <Button
              variant={isFavorito(productData.id) ? "danger" : "outline-danger"}
              onClick={() => toggleFavorito(productData)}
            >
              {isFavorito(productData.id) ? <FaHeart /> : <FaRegHeart />}
            </Button>

          </div>
        </Card.Body>
      </Card>

      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{productData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div style={{ flex: "0 0 200px" }}>
              <img
                src={productData.image}
                alt={productData.title}
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="ms-4" style={{ flex: 1 }}>
              <h5>{productData.title}</h5>
              <p>{productData.description}</p>
              <span className="badge bg-secondary">{productData.category}</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;
