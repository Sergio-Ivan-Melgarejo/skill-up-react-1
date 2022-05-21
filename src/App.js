import { useState } from "react";
// Library
import { Route, Routes } from "react-router-dom";

// Components
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Style
// import "./css/bootstrap.min.css";
import "./css/app.css";
import Detail from "./components/Detail";

function App() {
  // Redirect if user is not logged
  const [logged, setLogged] = useState(localStorage.getItem("token") || false);
  
  return (
    <div className="app container-fluid container-xxl p-0">
      <Header logged={logged} setLogged={setLogged}/>
      <main className="main">
        <Routes >
          <Route path="/" element={<h1>home</h1>} ></Route>
          <Route path="/list" element={<List logged={logged}/>} ></Route>
          <Route path="/login" element={<Login logged={logged} setLogged={setLogged}/>} ></Route>
          <Route path="/detail/:id" element={<Detail logged={logged}/>} ></Route>
        </Routes>  
      </main>
      <Footer />
    </div>
  );
}

export default App;
