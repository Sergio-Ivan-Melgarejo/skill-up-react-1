import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes >
        <Route path="/listado" element={<Listado />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>  
      <Footer />
    </>
  );
}

export default App;
