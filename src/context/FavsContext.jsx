import { createContext, useContext, useState } from "react";

// 1. Crear contexto
const FavsContext = createContext();

// 2. Hook personalizado para usar el contexto
export const useFavs = () => useContext(FavsContext);

// 3. Provider
export const FavsProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (producto) => {
  setFavoritos((prev) =>
    prev.find((item) => item.id === producto.id)
      ? prev.filter((item) => item.id !== producto.id) // lo quita
      : [...prev, producto] // lo agrega
  );
};


  const isFavorito = (id) => favoritos.some((item) => item.id === id);

  return (
    <FavsContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavsContext.Provider>
  );
};
