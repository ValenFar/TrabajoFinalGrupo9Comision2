import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import useFavs from "../hooks/useFavs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; 
import ModalPers from "./ModalPers";

const ProductCard = ({ productData }) => {
  const { toggleFavorito, isFavorito } = useFavs();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // estado de auth

  if (!productData) return <p>Cargando...</p>;

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

        <Card.Body className="d-flex flex-column flex-grow-1 ">
          <Card.Title style={{ fontSize: "19px" }}>{productData.title}</Card.Title>
          <Card.Text className="text-success" style={{ fontSize: "14px" }}>
            ${productData.price}
          </Card.Text>

          <div className="d-flex gap-2 mt-auto">
            <ModalPers productData={productData}/>
            {isAuthenticated ? (
              <Button
                variant={isFavorito(productData.id) ? "danger" : "outline-danger"}
                onClick={() => toggleFavorito(productData)}
              >
                {isFavorito(productData.id) ? <FaHeart /> : <FaRegHeart />}
              </Button>
            ) : (
              <Button
                variant="outline-danger"
                onClick={() => navigate('/login')}
              >
                <FaHeart />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      
    </>
  );
};

export default ProductCard;