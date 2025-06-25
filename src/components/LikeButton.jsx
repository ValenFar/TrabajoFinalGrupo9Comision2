import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Overlay from "./Overlay.jsx";
import MensajeEmergente from "./MensejaeEmergente.jsx";
import useFavs from "../hooks/useFavs";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LikeButton = ({ productData }) => {
  const { toggleFavorito, isFavorito } = useFavs();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  if (!productData) return null;

  return isAuthenticated ? (
    <>
      <Overlay
        mensaje={
          isFavorito(productData.id)
            ? "Quitar de favoritos"
            : "Añadir a favoritos"
        }
        direction="top"
      >
        <Button
          variant={isFavorito(productData.id) ? "danger" : "outline-danger"}
          onClick={() => {
            toggleFavorito(productData);
            setMensajeEmergente({
              ...mensajeEmergente,
              show: true,
              mensaje: isFavorito(productData.id)
                ? "Se quitó de favorito"
                : "Se añadió a favorito",
            });
          }}
        >
          {isFavorito(productData.id) ? <FaHeart /> : <FaRegHeart />}
        </Button>
      </Overlay>
      <MensajeEmergente
        mensaje={mensajeEmergente.mensaje}
        showMensaje={mensajeEmergente.show}
      />
    </>
  ) : (
    <Overlay
      mensaje="Añadir a favoritos (Debe loguearse para usar esta función)"
      direction="top"
    >
      <Button variant="outline-danger" onClick={() => navigate("/Login")}>
        <FaHeart />
      </Button>
    </Overlay>
  );
};

export default LikeButton;
