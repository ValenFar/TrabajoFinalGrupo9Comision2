import { createContext, useContext, useState, useEffect } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const fetchedProducts = useFetchProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (fetchedProducts && Array.isArray(fetchedProducts)) {
      setProducts(fetchedProducts);
    }
  }, [fetchedProducts]);

  // Agregar producto
  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  // Borrar producto por id
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // Modificar producto por id
  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

