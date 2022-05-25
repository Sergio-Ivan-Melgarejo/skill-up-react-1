import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

// Components
import ShowMoviesList from '../components/ShowMoviesList';

// Context
import LanguageContext from '../context/LanguageContext';

const Favorites = ({logged,addOrDemoveFromFavorite}) => {
    const {texts} = useContext(LanguageContext);
    const [moviesList, setMoviesList] = useState(false)
    
    let favMovies = localStorage.getItem("favs");
    if(favMovies === null){
        favMovies = []
    } else{
        favMovies = JSON.parse(favMovies);
    }

    useEffect(() => {
        setMoviesList(favMovies);
    }, [])
    
    if(!logged) return <Navigate to="/login" />

    return (
        <div className='favorites'>
            <h2 className='title'>{texts.favorite.title}</h2>
            <div className='search__container'>
                {
                    moviesList
                    ?   <>
                        {   
                            moviesList.length !== 0
                            ?   <ShowMoviesList data={moviesList} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />
                            :   <>
                                    <p className='nothing'>{texts.favorite.line1}</p>
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
                    : null
                }
            </div>
        </div>
  )
}

export default Favorites