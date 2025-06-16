import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [productData, setProductData] = useState([]); // estado para guardar los productos

  const BASE_URL = "https://fakestoreapi.com/products"; // url no modificable (sin barra al final)

  useEffect(() => {
    // hook que se ejecuta al montar el componente
    const fetchAllProducts = async () => {// asincrona porque la respuesta del api no es instantanea (promesa, llegara en un futuro proximo)
      try {
        // try ejecuta un procedimiento y si detecta error ejecuta el catch
        const response = await fetch(BASE_URL); 
        const data = await response.json(); // convierte la respuesta a json
        setProductData(data); //data ya es un array de productos
      } catch (error) {
        // al detectar un error ejecuta esto sin detener la ejecucion del sistema
        console.error("ERROR CON EL FETCH DE PRODUCTOS");
      }
    };
    fetchAllProducts(); //llamamos a la funcion para solicitar todos los productos al cargar
  }, []);

  return productData; //retornamos el estado para usarlo en otros componentes
};

export default useFetchProducts;
