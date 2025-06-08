import { motion } from "framer-motion";

const Editar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p>Pagina para la edicion de los articulos, editar/borrar</p>
    </motion.div>
  );
};

export default Editar;
