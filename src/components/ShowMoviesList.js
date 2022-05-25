import React, { useContext } from 'react'

// Components
import ButtonFavorite from './ButtonFavorite'
import Movie from './Movie'

// Style
import "../css/showMoviesList.css";
import Loader from './Loader';

// Style
import LanguageContext from '../context/LanguageContext';

const ShowMoviesList = ({data,addOrDemoveFromFavorite}) => {
    const {texts} = useContext(LanguageContext);
    return (
    <div className='showMoviesList'>
        {
            !data
            ?   <Loader />
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
                        :   <>
                                <p className='nothing'>{texts.extra.line1}</p>
                                <div className='detalle'>
                                    <div className='detalle__box'></div>
                                    <div className='detalle__box'></div>
                                    <div className='detalle__box'></div>
                                    <div className='detalle__box'></div>
                                    <div className='detalle__box'></div>
                                </div>
                            </>
                    }
                </>
        }
    </div>)
}

export default ShowMoviesList