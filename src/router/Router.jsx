import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import ProducDetalles from "../pages/ProducDetalles";
import ProducFavs from "../pages/ProducFavs";
import Editar from "../pages/Editar";

import Login from '../pages/Login'
import useAuth from '../hooks/useAuth';

const AppRouter = () => {
  const { isAuthenticated } = useAuth();
  return(
    <div className="router">
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Productos" element={<Productos />}/>
        <Route path="/Detalles" element={<ProducDetalles />}/>
        {
          isAuthenticated && (
            <>
            <Route path="/Favoritos" element={<ProducFavs />}/>
            <Route path="/Editar" element={<Editar />}/>
            </>
          )
        }
        <Route path="*" element={<div>ERROR 404</div>}></Route>
      </Routes>

    </div>
  )
};

export default AppRouter;