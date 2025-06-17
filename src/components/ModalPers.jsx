import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const ModalPers = ({ productData }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Detalles
      </Button>
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
    </div>
  );
};

export default ModalPers;
