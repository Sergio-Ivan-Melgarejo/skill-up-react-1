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

function App() {
  return (
    <div className="app container-fluid container-xxl p-0">
      <Header/>
      <main className="main">
        <Routes >
          <Route path="/" element={<h1>home</h1>} ></Route>
          <Route path="/list" element={<List />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
        </Routes>  
      </main>
      <Footer />
    </div>
  );
}

export default App;
