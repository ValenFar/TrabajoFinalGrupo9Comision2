//CSS
import '../css/bestRating.css'
//router
import { useNavigate } from 'react-router-dom';
//React-bootstrap components
import { Card, Col, Button, Row, Stack, Badge } from 'react-bootstrap';
//hooks
import useAuth from '../hooks/useAuth';
import useFavs from "../hooks/useFavs";
import useProductContext from '../hooks/useProductContext';

import { FaHeart, FaRegHeart } from "react-icons/fa";
import ModalPers from './ModalPers';
import Overlay from './Overlay.jsx'
import MensajeEmergente from './MensejaeEmergente.jsx';
import { useState, useEffect } from 'react';



export default function BestRating({ categoria }) {
  const { isAuthenticated } = useAuth();

  const { products } = useProductContext();
  if (!Array.isArray(products)) {
    return <p>Cargando productos...</p>;
  }
  
  const productsCutted = filtrarPructPorCategoria(products, categoria);
  
  const { toggleFavorito, isFavorito } = useFavs();
  const navigate = useNavigate();

  //Estado del mensaje emergente y su timer
  const [mensajeEmergente, setMensajeEmergente] = useState({show: false, mensaje: ""});
  useEffect(() => {
    let timer;
    if (mensajeEmergente.show) {
      timer = setTimeout(() => setMensajeEmergente({...mensajeEmergente, show: false, mensaje: ""}), 2000);
    }
    return () => clearTimeout(timer);
  }, [mensajeEmergente]);

  return (
    <>
    <Stack gap={2} className="col-md-5 mx-auto dg">
      <h1 className='best-rating-title-h1'>
        Lo más popular de 
        <strong className='best-rating-shape'>
            {categoria}
        </strong>
      </h1>
      <Row className="g-2 justify-content-md-center" >
        {productsCutted.map((p) => (
            <Row key={p.id} className="g-4">
              <Col xs={6} >
                <Card.Img src={p.image} className='best-rating-img-cover' />
              </Col>
              <Col xs={6} >
                <Card.Body>
                  <Card.Title className='mb-2'><strong>{p.title}</strong></Card.Title>
                  <Card.Text>
                    {p.description.length > 200 ? p.description.slice(0, 200) + '...' : p.description}
                  </Card.Text>
                  <div className='best-rating-buttons'>
                    <aside className='best-rating-product-count' >
                      <Overlay mensaje="Stock" direction="top" >
                        <Badge bg="info" >
                          ({p.rating.count})
                        </Badge>
                      </Overlay>
                    </aside>
                    <ModalPers productData={p}/>
                    {
                      isAuthenticated ? 
                      <>
                      <Overlay mensaje={isFavorito(p.id) ? "Quitar de favoritos" : "Añadir a favoritos"} direction="top" >
                        <Button variant={isFavorito(p.id) ? "danger" : "outline-danger"} onClick={() => {toggleFavorito(p); setMensajeEmergente({...mensajeEmergente, show: true, mensaje: isFavorito(p.id) ? "Se quitó de favorito" : "Se añadió a favorito"})}}>
                          { isFavorito(p.id) ? <FaHeart /> : <FaRegHeart />}
                        </Button>
                      </Overlay>
                      <MensajeEmergente mensaje={mensajeEmergente.mensaje} showMensaje={mensajeEmergente.show} ></MensajeEmergente>
                      </>
                      :
                      <Overlay mensaje="Añadir a favoritos (Debe loguearse para usar esta función)" direction="top" >
                        <Button variant="outline-danger" onClick={()=> navigate('/login')}>
                          <FaHeart />
                        </Button>
                      </Overlay>
                    }
                  </div>
                </Card.Body>
              </Col>
            </Row>
        ))}
      </Row>
    </Stack>
    </>
  );
}


function filtrarPructPorCategoria(productos, categoria){
  const productCategory = productos.filter(producto => producto.category === categoria);
  productCategory.sort((a, b) => b.rating.rate - a.rating.rate);
  productCategory.slice(0, 4);
  return productCategory
}