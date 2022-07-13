import Home from "./Componenets/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Componenets/UserRegistration/Registration";
import About from "./Componenets/About/About";
import SignUp from "./Componenets/SignIn/SignUp";
import AddProjects from "./Componenets/AddProjects/AddProjects";
import Projects from "./Componenets/ViewProjects/Projects";
import RequiedAuth from "./Componenets/RequiedAuth";
import Profile from "./Componenets/UserProfile/Profile";
import Profiles from "./Componenets/ViewProfile/Profiles";
import Footer from "./Componenets/Shared/Footer";
import Headers from "./Componenets/Header/Headers";

function App() {
  return (
    <div>
      <Headers></Headers>
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
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/view" element={<Profiles></Profiles>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
