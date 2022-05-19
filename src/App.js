import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";

function App() {
  return (
    <div className="App">
      <h1>Alkemy challenge</h1>
      <Routes >
        <Route path="/listado" element={<Listado />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>  
    </div>
  );
}

export default App;
