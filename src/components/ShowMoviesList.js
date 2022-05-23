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
                                        img: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
                                        id: movie.id,
                                        title: movie.title,
                                        date: movie.release_date,
                                        review: movie.overview
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