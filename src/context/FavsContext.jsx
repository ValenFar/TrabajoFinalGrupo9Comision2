import { createContext, useContext, useEffect, useState } from "react";
import useProductContext from "../hooks/useProductContext";

// contexto
export const FavsContext = createContext();

// hook personalizado para usar el contexto
// export const useFavs = () => useContext(FavsContext);

// Provider
export const FavsProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const {products} = useProductContext(); // trae los productos actuales

  const toggleFavorito = (producto) => {
  setFavoritos((prev) =>
    prev.find((item) => item.id === producto.id)
      ? prev.filter((item) => item.id !== producto.id) // lo quita
      : [...prev, producto] // lo agrega
  );
};


  const isFavorito = (id) => favoritos.some((item) => item.id === id);

  useEffect(() =>{ // sincroniza los cambios de productContext
    setFavoritos((prevFavs) =>
    prevFavs
      .map((fav) => products.find((p) => p.id === fav.id) || null) // actualiza datos
      .filter(Boolean) // elimina los que ya no existen (null / undefined)
    )
    console.log("cambiaron los productos")
  },[products]) // cada vez que hay cambios en productos

  return (
    <FavsContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavsContext.Provider>
  );
};
