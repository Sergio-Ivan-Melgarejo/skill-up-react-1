import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';

// Styles
import "../css/detail.css";

// Librarys
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


const API_KEY = "599b1ab5492b9cdab8144e5bf20b6ae5";
const ENPOINT = "https://api.themoviedb.org/3/";
const language = "en-US";

const Detail = ({logged}) => {
    const params = useParams();
    const [movie, setMovie] = useState(false);

    useEffect(() => {
        const {id} = params;
        axios(`${ENPOINT}movie/${id}?api_key=${API_KEY}&language=${language}`)
        .then(res =>{ 
        console.log(res);
        if(res.status === 200) setMovie(res.data);
        })
        .catch(error =>{
        console.log(error)
        MySwal.fire({
            title: <strong>Error 404</strong>,
            html: <i>{error.message}</i>,
            icon: 'error',
            background: "#161d2f",
            color: "#eee"
        })
        })
    }, [params])
  console.log(movie)
    if(!logged) return <Navigate to="/login" />
    return (
        <div className='detail'>
            {
                movie
                ?   <>
                        <div className='detail__container'>
                            <div className='detail__bg-container'>  
                                <img className='detail__bg' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=''/>
                                <div className='detail__shadow'></div>
                                <h2 className='detail__title'>{movie.title}</h2>
                            </div>
                            <div className='detail__data'>
                                <div className='detail__data-container'>
                                    <img className='detail__img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/>
                                    <div className='detail__info'>
                                        <h3 className='detail__sub-title'>{movie.original_title}</h3>
                                        <ul className='detail__tags'>
                                            {
                                                movie.genres.map(tag => <li className='detail__tag'>{tag.name}</li>)
                                            }
                                        </ul>
                                        <p className='detail__date'>{movie.release_date}</p>
                                    </div>
                                </div>
                                <div className='detail__data-container'>
                                     <p className='detail__text'>{movie.overview}</p>           
                                </div>
                            </div>
                        </div>
                    </>
                :    "loading"
            }
        </div>
    )
}

export default Detail