import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token"); // Mengambil token dari localStorage

  return (
    <Route
      {...rest}
      element={token ? element : <Navigate to="/login" replace />} // Mengizinkan akses jika token ada, jika tidak, arahkan ke halaman login
    />
  );
};

export default PrivateRoute;
