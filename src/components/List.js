import React, { useEffect, useState } from 'react';

// Components
import {  Navigate } from 'react-router-dom';

// Librarys
import axios from 'axios';

// Styles
import "../css/list.css";

const API_KEY = "599b1ab5492b9cdab8144e5bf20b6ae5";
const ENPOINT = "https://api.themoviedb.org/3/";
const language = "en-US";
const adult = "false";

const List = () => {
  // Redirect if user is not logged
  const token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    axios(`${ENPOINT}discover/movie?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&include_adult=${adult}&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(res =>{ 
      console.log(res);
      if(res.status === 200) setMoviesList(res.data.result);
    })
    .catch(res => console.log(res))
  }, [setMoviesList])
  
  if(!token) return <Navigate to="/login" />

  return (
    <>
      <h2 className='title'>List</h2>
      <div className='list'>
        <div className='movie'>
          <div className='movie__container'>
            <img className='movie__img' src='' alt=''/>
            <p className='movie__description'>de d as das d as d as d as d asdsada sd a sd a sd as d as d  as d asd  asd ad</p>
          </div>
          <h3 className='movie__title'>title</h3>
        </div>
      </div>
    </>
  )
}

export default List