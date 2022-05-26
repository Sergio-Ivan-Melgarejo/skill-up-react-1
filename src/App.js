import { useEffect, useReducer, useState } from "react";
// Library
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Trends from "./pages/Trends";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Error from "./pages/Error";

// Style
import "./css/app.css";

// Context
import { LanguageProvider } from "./context/LanguageContext";

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "./actions/favoriteActions"

function App() {
  // Redirect if user is not logged
  const [logged, setLogged] = useState(localStorage.getItem("token") || false);
  const state = useSelector(state=> state); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <div className="app">
      <LanguageProvider>
        <Header logged={logged} setLogged={setLogged}/>
        <main className="main">
          <Routes >
            <Route path="/" element={<Home logged={logged}/>} ></Route>
            <Route path="/trends" element={<Trends logged={logged}/>} ></Route>
            <Route path="/login" element={<Login logged={logged} setLogged={setLogged}/>} ></Route>
            <Route path="/detail/:id" element={<Detail logged={logged}/>}></Route>
            <Route path="/search/*" element={<Search logged={logged}/>}></Route>
            <Route path="/favorites" element={<Favorites logged={logged}/>}></Route>
            <Route path="*" element={<Error logged={logged} />}></Route>
          </Routes>  
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
