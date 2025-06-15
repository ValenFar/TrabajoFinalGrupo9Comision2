import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import ProducDetalles from "../pages/ProducDetalles";
import ProducFavs from "../pages/ProducFavs";
import Editar from "../pages/Editar";
import Nosotros from "../pages/Nosotros";
const AppRouter = () => {
  return(
    <div className="router">
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/Productos" element={<Productos />}/>
        <Route path="/Detalles" element={<ProducDetalles />}/>
        <Route path="/Favoritos" element={<ProducFavs />}/>
        <Route path="/Editar" element={<Editar />}/>
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>

    </div>
  )
};

export default AppRouter;