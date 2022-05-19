// Library
import { Route, Routes } from "react-router-dom";

// Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Style
import "./css/bootstrap.min.css"
import "./css/app.css"

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes >
        <Route path="/listado" element={<Listado />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
