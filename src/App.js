import { useState } from "react";
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

// Style
import "./css/app.css";

function App() {
  // Redirect if user is not logged
  const [logged, setLogged] = useState(localStorage.getItem("token") || false);

  const addOrDemoveFromFavorite = (object) =>{
    // obtiene data
    let favMovies = localStorage.getItem("favs");
    if(favMovies === null){
      favMovies = []
    } else{
      favMovies = JSON.parse(favMovies);
    }

    // comprueba data
    const TheMovieHasAlreadyBeenSaved = favMovies.find(movie => movie.id === object.id);
    
    if(TheMovieHasAlreadyBeenSaved === undefined){
      // add movie
      favMovies.push(object);
      localStorage.setItem("favs",JSON.stringify(favMovies));
    }
    else{
      // remove movie
      favMovies = favMovies.filter(movie => movie.id !== object.id);
      localStorage.setItem("favs",JSON.stringify(favMovies));
    }
  } 

  return (
    <div className="app container-fluid container-xxl p-0">
      <Header logged={logged} setLogged={setLogged}/>
      <main className="main">
        <Routes >
          <Route path="/" element={<h1>home</h1>} ></Route>
          <Route path="/trends" element={<Trends logged={logged} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />} ></Route>
          <Route path="/login" element={<Login logged={logged} setLogged={setLogged}/>} ></Route>
          <Route path="/detail/:id" element={<Detail logged={logged} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />}></Route>
          <Route path="/search/*" element={<Search logged={logged} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />}></Route>
          <Route path="/favorites" element={<Favorites logged={logged} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />}></Route>
        </Routes>  
      </main>
      <Footer />
    </div>
  );
}

export default App;
