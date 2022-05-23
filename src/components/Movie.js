import React from 'react';
import { Link } from 'react-router-dom';

// Style
import "../css/movie.css";

const Movie = ({data}) => {
    return (
        <Link to={`/detail/${data.id}`} key={`moviesList-${data.id}`} className='movie'>
            <div className='movie__img-container'>
                <img className='movie__img' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt=''/>
                <p className='movie__description'>{data.overview.length > 90 ? `${data.overview.slice(0,90)}...` : data.overview}</p>
            </div>
            <div className='movie__tags'>
                <span className='movie__date'>{data.release_date}</span>
            </div>
            <h3 className='movie__title'>
                {   
                    data.title 
                    ?   data.title.length > 30 ? `${data.title.slice(0,30)}...` : data.title
                    :   <>
                            {
                                data.name 
                                ?   data.name.length > 30 ? `${data.name.slice(0,30)}...` : data.name
                                :   "No title"
                            }
                        </>
                }
            </h3>
        </Link>
    )
}

export default Movie