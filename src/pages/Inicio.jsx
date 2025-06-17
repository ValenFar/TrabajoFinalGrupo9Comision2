import { motion } from "framer-motion";

//React-bootstrap components
import Stack from 'react-bootstrap/Stack';
//Folder components
import BestRating from '../components/BestRating.jsx';



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
  
  return (
    <>
    <Stack direction="horizontal"  className="m-2">
        <BestRating categoria="electronics" />
    </Stack >
    <Stack direction="horizontal"  className="m-2">
        <BestRating categoria="men's clothing" />
    </Stack>
    </>
  );
}