import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
