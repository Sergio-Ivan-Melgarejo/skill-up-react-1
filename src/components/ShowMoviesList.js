import React from 'react'

// Components
import ButtonFavorite from './ButtonFavorite'
import Movie from './Movie'

// Style
import "../css/showMoviesList.css";

const ShowMoviesList = ({data,addOrDemoveFromFavorite}) => {
    return (
    <div className='showMoviesList'>
        {
            !data
            ?   "loading"
            :   <>
                    {   
                        data.length > 0 
                        ?   data.map((movie)=> <div key={`search-${movie.id}`} className='movie-container'>
                                <Movie data={movie} />
                                <ButtonFavorite
                                    addOrDemoveFromFavorite={addOrDemoveFromFavorite}
                                    data={{
                                        poster_path: movie.poster_path,
                                        id: movie.id,
                                        title: movie.title,
                                        release_date: movie.release_date,
                                        overview: movie.overview
                                    }} 
                                />
                            </div>)
                        :   "No results found"
                    }
                </>
        }
    </div>)
}

export default ShowMoviesList