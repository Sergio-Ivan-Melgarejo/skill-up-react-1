import React, { useEffect, useState } from 'react';

// Components
import { Navigate } from 'react-router-dom';

// Librarys
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ShowMoviesList from '../components/ShowMoviesList';
const MySwal = withReactContent(Swal);

// &include_video=true
const API_KEY = "599b1ab5492b9cdab8144e5bf20b6ae5";
const ENPOINT = "https://api.themoviedb.org/3/";
const language = "en-US";
const adult = "false";
const page = 1;

const Trends = ({logged, addOrDemoveFromFavorite}) => {
  const [moviesList, setMoviesList] = useState(false)

  useEffect(() => {
    axios(`${ENPOINT}trending/all/day?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&include_adult=${adult}&page=${page}`)
    .then(res =>{ 
      console.log(res);
      if(res.status === 200){
        // filtro peliculas
        let result = res.data.results.filter(movie =>movie.media_type === "movie");
        setMoviesList(result);
      }
    })
    .catch(error =>{
      // console.log(error)
      MySwal.fire({
        title: <strong>Error 404</strong>,
        html: <i>{error.message}</i>,
        icon: 'error',
        background: "#161d2f",
        color: "#eee"
      })
    })
  }, [setMoviesList])
  
  if(!logged) return <Navigate to="/login" />

  return (
    <>
      <h2 className='title'>Trends</h2>
      <ShowMoviesList data={moviesList} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />
    </>
  )
}

export default Trends