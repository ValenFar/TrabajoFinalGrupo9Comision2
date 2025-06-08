import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <p>Pagina de inicio</p>
      </div>
    </motion.div>
  );
};

export default Inicio;
