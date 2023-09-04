import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import { ResetPassword, SignIn, SignUp } from "./pages/landing";
import NotFound from "./pages/not-found/NotFound";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <StateContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard/*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </StateContext>
  );
};

export default App;
