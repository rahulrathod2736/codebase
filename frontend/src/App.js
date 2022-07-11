import "./App.css";
import "antd/dist/antd.css";
import { SignIn } from "./pages/signin";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { Home } from "./pages/home";

function App() {

  const RenderNode = () => {
    const token = localStorage.getItem("accessToken");
    return token ? <Home /> : <Navigate to="/signin" replace />;
  }
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/signin" replace />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="/*" element={<RenderNode></RenderNode>} />
    </Routes>
  );
}


export default App;
