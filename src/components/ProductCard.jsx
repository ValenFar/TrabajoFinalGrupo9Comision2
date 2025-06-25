import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ModalPers from "./ModalPers";
import LikeButton from "./LikeButton.jsx";

const ProductCard = ({ productData }) => {

  if (!productData) return <p>Cargando...</p>;

  const [mensajeEmergente, setMensajeEmergente] = useState({
    show: false,
    mensaje: "",
  });
  useEffect(() => {
    let timer;
    if (mensajeEmergente.show) {
      timer = setTimeout(
        () =>
          setMensajeEmergente({
            ...mensajeEmergente,
            show: false,
            mensaje: "",
          }),
        2000
      );
    }
    return () => clearTimeout(timer);
  }, [mensajeEmergente]);

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
          <Card.Title style={{ fontSize: "19px" }}>
            {productData.title}
          </Card.Title>
          <Card.Text className="text-success" style={{ fontSize: "14px" }}>
            ${productData.price}
          </Card.Text>

          <div className="d-flex gap-2 mt-auto">
            <ModalPers productData={productData} />
            <LikeButton productData={productData} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
