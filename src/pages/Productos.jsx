import { motion } from "framer-motion";

const Productos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <p>Pestaña de productos en general</p>
      </div>
    </motion.div>
  );
};

export default Productos;
