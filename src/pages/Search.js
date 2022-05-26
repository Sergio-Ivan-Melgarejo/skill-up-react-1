import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

// Components
import ShowMoviesList from '../components/ShowMoviesList';

// Style
import "../css/search.css";

// Context
import LanguageContext from '../context/LanguageContext';

// Librarys
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

// &include_video=true
const API_KEY = "599b1ab5492b9cdab8144e5bf20b6ae5";
const ENPOINT = "https://api.themoviedb.org/3/";
const adult = "false";
const page = 1;

const Search = ({logged}) => {
    const {texts} = useContext(LanguageContext);
    const params = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const keyword = e.target.search.value.trim();

        if(keyword === "" || keyword === undefined){
            MySwal.fire({
                html: texts.search.msg2,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            return
        }

        if(keyword.length < 3){
            MySwal.fire({
                html: texts.search.msg3,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            return
        }

        navigate(`${keyword}`)
    }
    
    // para buscar si hay params
    const [moviesList, setMoviesList] = useState(false);

    useEffect(() => {
        if(params["*"].length > 2){
            axios(`${ENPOINT}search/movie?api_key=${API_KEY}&language=${texts.lang}&include_adult=${adult}&page=${page}&query=${params["*"]}`)
            .then(res =>{ 
                // console.log(res);
                if(res.status === 200){
                    setMoviesList(res.data.results);
                    if(res.data.results.length === 0){
                        MySwal.fire({
                            html: texts.search.msg1,
                            icon: 'error',
                            background: "#161d2f",
                            color: "#eee"
                        })
                    }
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
        }
        // redigige si por url busca menos de 2 caracter
        if(params["*"].length < 3 && params["*"].length !== 0){
            navigate("/search")
        }

    }, [setMoviesList,params,navigate,texts])

    if(!logged) return <Navigate to="/login" />

    return (
        <div className='search'>
            <h2 className='title'>{params["*"] ? params["*"] : texts.search.title}</h2>
            <div className='search__container'>
                <form onSubmit={handleSubmit} className='search__form'>
                    <input className='search__search' type="search" name='search' placeholder={texts.search.placeholder} />
                    <input className='search__button' type="submit" value={texts.search.btn} />
                </form>
                {
                    params["*"]
                    ?   <ShowMoviesList data={moviesList}/>
                    :   <div className='detalle'>
                            <div className='detalle__box'></div>
                            <div className='detalle__box'></div>
                            <div className='detalle__box'></div>
                            <div className='detalle__box'></div>
                            <div className='detalle__box'></div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Search