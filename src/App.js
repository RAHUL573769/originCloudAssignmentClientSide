import Home from "./Componenets/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Componenets/UserRegistration/Registration";
import About from "./Componenets/About/About";
import SignUp from "./Componenets/SignIn/SignUp";

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
