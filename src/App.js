import Home from "./Componenets/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Componenets/UserRegistration/Registration";
import About from "./Componenets/About/About";
import SignUp from "./Componenets/SignIn/SignUp";
import AddProjects from "./Componenets/AddProjects/AddProjects";
import Projects from "./Componenets/ViewProjects/Projects";
import RequiedAuth from "./Componenets/RequiedAuth";

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>

        <Route
          path="/about"
          element={
            <RequiedAuth>
              <About></About>
            </RequiedAuth>
          }
        ></Route>
        <Route path="/viewProjects" element={<Projects></Projects>}></Route>
        <Route
          path="/addProjects"
          element={<AddProjects></AddProjects>}
        ></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
