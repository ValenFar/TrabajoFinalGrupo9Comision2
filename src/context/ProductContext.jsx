import { createContext, useContext } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productData = useFetchProducts();

  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
