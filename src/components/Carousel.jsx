import { useEffect, useState, useContext } from 'react';

// Bootstrap components
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

//Use context
import { ProductsContext } from '../context/productsContext.js';

import Etiqueta from './Etiqueta.jsx';

export default function Carrusel() {
  const products  = useContext(ProductsContext);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(products.sort(() => 0.5 - Math.random()).slice(0, 3)) //Devuelve 3 productos aleatorios
  }, [products]);

  console.log('index', index);
  return (
    <Row className='justify-content-md-center m-4' >
        <Col>
            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' style={{height: '500px'}} >
            {items.map((item) => (
              <Carousel.Item id={item.id} >
                <img src={item.image} alt={item.id + item.title} style={{ objectFit: 'contain', width: '100%', maxHeight: '500px'}} />
                <Carousel.Caption style={{ backgroundColor: 'rgba(101, 213, 254, 0.5)' }} >
                  <h3>{item.title}</h3>
                  <Etiqueta>
                    <img src="../../../public/dollar-icon.svg" alt="favorite"  style={ style_icon }/>
                    ${item.price}
                  </Etiqueta>
                  <Etiqueta>
                    <img src="../../../public/star-icon.svg" alt="favorite"  style={ style_icon }/>
                    {item.rating.rate}
                  </Etiqueta>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            </Carousel>
        </Col>
        
    </Row>
  );
}

const style_icon = { 
  maxWidth: '20px', 
  marginRight: '0.4rem', 
  filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7))'
}
