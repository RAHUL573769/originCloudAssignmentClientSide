import Home from "./Componenets/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Componenets/UserRegistration/Registration";

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
