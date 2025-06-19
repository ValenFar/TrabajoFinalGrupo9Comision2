import React, { useState } from "react";
import useProductContext from "../hooks/useProductContext";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const initialForm = {
  id: "",
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

const Edicion = () => {
  const { products, addProduct, deleteProduct, updateProduct } = useProductContext();

  const [form, setForm] = useState(initialForm);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.title || !form.price) return; // validacion basica
    addProduct({
      ...form,
      id: Date.now(), // genera un id con la fecha actual
      price: parseFloat(form.price), // convierte a nro decimal
    });
    setForm(initialForm);
  };

  const handleEdit = (product) => {
    setForm({
      id: product.id,
      title: product.title || "",
      price: product.price || "",
      description: product.description || "",
      category: product.category || "",
      image: product.image || "",
    });
    setEditMode(true);
  };

  const handleUpdate = () => {
    updateProduct(form.id, {
      title: form.title,
      price: parseFloat(form.price),
      description: form.description,
      category: form.category,
      image: form.image,
    });
    setForm(initialForm);
    setEditMode(false);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <Container>
      <h2 className="my-4">Edición de Productos</h2>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              name="title"
              placeholder="Título"
              value={form.title}
              onChange={handleChange}
              className="mb-2"
            />
          </Col>
          <Col md={2}>
            <Form.Control
              type="number"
              name="price"
              placeholder="Precio"
              value={form.price}
              onChange={handleChange}
              className="mb-2"
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              name="category"
              placeholder="Categoría"
              value={form.category}
              onChange={handleChange}
              className="mb-2"
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              name="image"
              placeholder="URL de imagen"
              value={form.image}
              onChange={handleChange}
              className="mb-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              placeholder="Descripción"
              value={form.description}
              onChange={handleChange}
              className="mb-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            {editMode ? (
              <Button variant="warning" onClick={handleUpdate} className="w-100">
                Guardar Cambios
              </Button>
            ) : (
              <Button variant="success" onClick={handleAdd} className="w-100">
                Agregar Producto
              </Button>
            )}
          </Col>
        </Row>
      </Form>
      <Row className="g-3">
  {products.map((product) => (
    <Col key={product.id} xs={12}>
      <Card className="flex-row align-items-center p-2" style={{ minHeight: 140 }}>
        <div style={{ width: 120, height: 120, background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
        <Card.Body className="d-flex flex-row align-items-center flex-grow-1">
          <div className="flex-grow-1">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className="mb-1"><strong>Precio:</strong> ${product.price}</Card.Text>
            <Card.Text className="mb-1"><strong>Categoría:</strong> {product.category}</Card.Text>
            <Card.Text className="mb-1" style={{ fontSize: "0.95em" }}>{product.description}</Card.Text>
          </div>
          <div className="d-flex flex-column gap-2 ms-3">
            <Button
              variant="primary"
              onClick={() => handleEdit(product)}
            >
              Editar
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(product.id)}
            >
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>
  );
};

export default Edicion;
