//CSS
import '../css/bestRating.css'
//router
import { useNavigate } from 'react-router-dom';
//React-bootstrap components
import { Card, Col, Row, Stack, Badge } from 'react-bootstrap';
//hooks
import useProductContext from '../hooks/useProductContext';
import ModalPers from './ModalPers';
import Overlay from './Overlay.jsx'
import LikeButton from './LikeButton.jsx';

export default function BestRating({ categoria }) {

  const { products } = useProductContext();
  if (!Array.isArray(products)) {
    return <p>Cargando productos...</p>;
  }
  
  const productsCutted = filtrarPructPorCategoria(products, categoria);
  
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
                  <Card.Text className="text-success">
                    <strong>${p.price}</strong>
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
                    
                    <LikeButton productData={p}/>
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