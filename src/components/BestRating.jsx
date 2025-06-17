//React-bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/esm/Stack';

import { useContext } from 'react';


import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


import { useFavs } from "../context/FavsContext";
import { useProductContext } from "../context/ProductContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ModalPers from './ModalPers';

export default function BestRating({ categoria }) {
  const { isAuthenticated } = useAuth();
  //const products  = useContext(ProductsContext);
  const { products } = useProductContext();
if (!Array.isArray(products)) {
  return <p>Cargando productos...</p>;
}
  
let productCategory = products.filter(producto => producto.category === categoria);
productCategory.sort((a, b) => b.rating.rate - a.rating.rate);
let productsCutted = productCategory.slice(0, 4);
  
  const { toggleFavorito, isFavorito } = useFavs();
  const navigate = useNavigate();

  return (
    <>
    <Stack gap={2} className="col-md-5 mx-auto dg">
      <h1 style={{marginTop: '1rem', marginBottom: '2rem', textTransform: 'uppercase'}}>
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
            <Row key={p.id} className="g-4">
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
                    
                    (<aside>{p.rating.count}</aside>)
                    <ModalPers productData={p}/>
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

