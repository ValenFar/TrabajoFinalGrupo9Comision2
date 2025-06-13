import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext.jsx";
import { FavsProvider } from "./context/FavsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <FavsProvider>
          <App />
        </FavsProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
