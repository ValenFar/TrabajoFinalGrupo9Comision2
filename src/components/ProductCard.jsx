import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const ProductCard = ({ productData }) => {
  const [modalShow, setModalShow] = useState(false);

  if (!productData){
    return(
      <div>
        <p>Cargando</p>
      </div>
    ) 
  } 

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
          <Card.Title className="mb-2" style={{ fontSize: "19px" }}>
            {productData.title}
          </Card.Title>
          <Card.Text
            className="flex-grow-1 text-success "
            style={{ fontSize: "14px" }}
          >
            ${productData.price}
          </Card.Text>
          <Button
            variant="primary"
            className="align-self-start px-3 py-2"
            onClick={() => setModalShow(true)}
          >
            Detalles
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{productData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-row">
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
              <h5 className="mb-2">{productData.title}</h5>
              <p className="mb-2">{productData.description}</p>
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
