import React from 'react'

// Components
import ButtonFavorite from './ButtonFavorite'
import Movie from './Movie'

// Style
import "../css/showMoviesList.css"

const ShowMoviesList = ({data}) => {
  return (<div className='showMoviesList'>
       {
        !data
        ?   "loading"
        :    data.map((movie,index)=> <div className='movie-container'>
            <Movie data={movie} />
            <ButtonFavorite id={movie.id} />
        </div>)
    }
    </div>)
}

export default ShowMoviesList