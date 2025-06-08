import { motion } from "framer-motion";

const ProducDetalles = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <p>Detalles de Los productos</p>
      </div>
    </motion.div>
  );
};

export default ProducDetalles;
