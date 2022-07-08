import "./App.css";
import "antd/dist/antd.css";
import { SignIn } from "./pages/signin";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { Home } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route exact path="/signin" element={<SignIn />}/>
      <Route exact path="/signup" element={<SignUp />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  );
}


export default App;
