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

  const [moviesList, setMoviesList] = useState(false)

  useEffect(() => {
    axios(`${ENPOINT}discover/movie?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&include_adult=${adult}&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(res =>{ 
      console.log(res);
      if(res.status === 200) setMoviesList(res.data.results);
    })
    .catch(res => console.log(res))
  }, [setMoviesList])
  
  if(!token) return <Navigate to="/login" />
console.log(moviesList)
  return (
    <>
      <h2 className='title'>List</h2>
      <div className='list'>
        {
          moviesList 
          ? moviesList.map((movie,index)=> <div key={`moviesList-${index}`} className='movie'>
              <div className='movie__container'>
                <img className='movie__img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/>
                <p className='movie__description'>{movie.overview.length > 90 ? `${movie.overview.slice(0,90)}...` : movie.overview}</p>
              </div>
              <div className='movie__tags'>
                <span>{movie.release_date}</span>
              </div>
              <h3 className='movie__title'>{movie.title.length > 30 ? `${movie.title.slice(0,30)}...` : movie.title} </h3>
            </div>)
          : "Loading"
        }
      </div>
    </>
  )
}

export default List