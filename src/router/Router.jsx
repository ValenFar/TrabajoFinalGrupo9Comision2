import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import ProducFavs from "../pages/ProducFavs";
import Editar from "../pages/Editar";
import Nosotros from "../pages/Nosotros";
import Error from "../pages/Error";

import Login from "../pages/Login";
//import useAuth from "../hooks/useAuth";
import ProteRouter from "./ProteRouter";

const AppRouter = () => {
//const { isAuthenticated } = useAuth();
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Nosotros" element={<Nosotros />} />

        <Route
          path="/Favoritos"
          element={
            <ProteRouter>
              <ProducFavs />
            </ProteRouter>
          }
        />

        <Route
          path="/Editar"
          element={
            <ProteRouter>
              <Editar />
            </ProteRouter>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
