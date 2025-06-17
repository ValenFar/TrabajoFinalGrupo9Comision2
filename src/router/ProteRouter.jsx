import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProteRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/Login" replace />;
};

export default ProteRouter;

