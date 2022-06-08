import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const RestrictedRoute = () => {
   const { authState } = useAuth();

   return authState.isLoggedIn ? <Navigate to="/home" replace /> : <Outlet />;
};

export { RestrictedRoute };
