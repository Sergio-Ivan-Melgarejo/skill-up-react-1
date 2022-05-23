import React from 'react'

// Components
import ButtonFavorite from './ButtonFavorite'
import Movie from './Movie'

// Style
import "../css/showMoviesList.css";

const ShowMoviesList = ({data}) => {
    return (
    <div className='showMoviesList'>
        {
            !data
            ?   "loading"
            :   <>
                    {   
                        data.length > 0 
                        ?   data.map((movie)=> <div className='movie-container'>
                                <Movie data={movie} />
                                <ButtonFavorite id={movie.id} />
                            </div>)
                        :   "No results found"
                    }
                </>
        }
    </div>)
}

export default ShowMoviesList