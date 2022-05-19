import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";

function App() {
  const arr =  [1,2,3]
  return (
    <div className="App">
      <h1>Alkemy challenge</h1>
      <Routes >
        <Route path="/listado" element={<Listado />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>

      {
        arr.map((ele,i) => <h1 key={i}>{ele}</h1>)
      }
      
    </div>
  );
}

export default App;
