//React-bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/esm/Stack';

//Use context
//import { ProductsContext } from '../context/productsContext.js';
import { useContext } from 'react';
import Etiqueta from './Etiqueta.jsx';

import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


import { useFavs } from "../context/FavsContext";
import { useProductContext } from "../context/ProductContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function BestRating({ categoria }) {
  const { isAuthenticated } = useAuth();
  //const products  = useContext(ProductsContext);
  const { productData } = useProductContext();
  //Operaciones para obtener todos los productos de una determinada categoria y ordenarlos por su rating. El resultado final es un array con 4 objetos en su interior
  let productCategory = productData.filter(producto => producto.category === categoria);
  productCategory.sort((a, b) => b.rating.rate - a.rating.rate);
  let productsCutted = productCategory.slice(0, 4);
  
  const { toggleFavorito, isFavorito } = useFavs();
  const navigate = useNavigate();

  return (
    <>
    <Stack gap={2} className="col-md-5 mx-auto dg">
      <h1 style={{marginTop: '10rem', marginBottom: '2rem', textTransform: 'uppercase'}}>
        Lo más popular de 
        <strong style={{
            background: 'rgb(215, 3, 247)',
            color: 'white',
            padding: '.5rem',
            display: 'inline-block',
            transform: 'skew(-15deg)',
            borderRadius: '6px',
            marginLeft: '0.5rem',
            }}>
            {categoria}
        </strong>
      </h1>
      <Row className="g-2 justify-content-md-center" >
        {productsCutted.map((p) => (
            <Row id={p.id} className="g-4">
              <Col xs={6} >
                <Card.Img src={p.image} style={{ objectFit: 'contain', maxHeight: '300px' }} />
              </Col>
              <Col xs={6} >
                <Card.Body>
                  
                  <Card.Title style={{marginBottom: '1rem'}}><strong>{p.title}</strong></Card.Title>
                  <Card.Text>
                    {p.description.length > 200 ? p.description.slice(0, 200) + '...' : p.description}
                  </Card.Text>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Etiqueta>
                      <img src="../../../public/star-icon.svg" alt="favorite"  style={ style_icon }/>
                      {p.rating.rate}
                    </Etiqueta>
                    (<aside>{p.rating.count}</aside>)
                    <Button variant="primary" style={{marginLeft: '20px', marginRight: '10px'}}>Details</Button>
                    {
                      isAuthenticated ? 
                      <Button variant={isFavorito(p.id) ? "danger" : "outline-danger"} onClick={() => toggleFavorito(p)}>
                        { isFavorito(p.id) ? <FaHeart /> : <FaRegHeart />}
                      </Button>
                      :
                      <Button variant="outline-danger" onClick={()=> navigate('/login')}>
                        <FaHeart />
                      </Button>
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

const style_icon = { 
  maxWidth: '20px', 
  marginRight: '0.4rem', 
  filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7))'
}
