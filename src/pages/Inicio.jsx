import { motion } from "framer-motion";

//React-bootstrap components
import Stack from 'react-bootstrap/Stack';
//Folder components
import BestRating from '../components/BestRating.jsx';
import Carrusel from '../components/Carousel.jsx';
//Use context
import { ProductsContext } from '../context/productsContext.js';
import { useContext } from 'react';

const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <Home />
      </div>
    </motion.div>
  );
};

export default Inicio;

function Home({ }) {
  const items  = useContext(ProductsContext);
  return (
    <>
    <Carrusel />

    <Stack direction="horizontal"  style={{ margin: '1rem' }}>
        <BestRating categoria="electronics" />
    </Stack >
    <Stack direction="horizontal"  style={{ margin: '1rem' }}>
        <BestRating categoria="men's clothing" />
    </Stack>
    </>
  );
}