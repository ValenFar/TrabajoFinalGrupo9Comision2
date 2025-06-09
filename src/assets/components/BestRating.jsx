//React-bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/esm/Stack';




//Use context
import { ProductsContext } from '../../contexts/productsContext.js';
import { useContext } from 'react';
import Etiqueta from './Etiqueta.jsx';




export default function BestRating({ categoria }) {
  const products  = useContext(ProductsContext);
  //Operaciones para obtener todos los productos de una determinada categoria y ordenarlos por su rating. El resultado final es un array con 4 objetos en su interior
  let productCategory = products.filter(producto => producto.category === categoria);
  productCategory.sort((a, b) => b.rating.rate - a.rating.rate);
  let productsCutted = productCategory.slice(0, 4);


  return (
    <>
    <Stack gap={2} className="col-md-5 mx-auto">
      <h1 style={{marginTop: '10rem', marginBottom: '2rem', textTransform: 'uppercase'}}>
        Lo más popular de 
        <strong style={{
            background: 'rgb(215, 3, 247)',
            color: 'white',
            padding: '.5rem',
            display: 'inline-block',
            transform: 'skew(-15deg)', // Hace el rectángulo inclinado
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
                <Button variant="link" style={{ margin: '5px', padding: '0px', position: 'absolute' }} >
                  <img src="../../../public/favorite.png" alt="Favorito" style={{width: '30px'}} />
                </Button>
                <Card.Img src={p.image} style={{ objectFit: 'contain', maxHeight: '300px' }} />
              </Col>
              <Col xs={6} >
                <Card.Body>
                  <Card.Title style={{marginBottom: '1rem'}}><strong>{p.title}</strong></Card.Title>
                  <Card.Text>
                    {p.description.length > 200 ? p.description.slice(0, 200) + '...' : p.description}
                  </Card.Text>
                  <Etiqueta>
                    <img src="../../../public/star-icon.svg" alt="favorite"  style={ style_icon }/>
                    {p.rating.rate}
                  </Etiqueta>
                  <Button variant="primary" style={{margin: '0.5rem'}}>Details</Button>
                  <Button variant="secondary" >Add to Cart</Button>
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
