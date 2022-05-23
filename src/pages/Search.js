import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

// Components
import ShowMoviesList from '../components/ShowMoviesList';

// Style
import "../css/search.css";

// Librarys
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


// &include_video=true
const API_KEY = "599b1ab5492b9cdab8144e5bf20b6ae5";
const ENPOINT = "https://api.themoviedb.org/3/";
const language = "en-US";
const adult = "false";
const page = 1;

const Search = ({logged,addOrDemoveFromFavorite}) => {
    const params = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const keyword = e.target.search.value;

        if(keyword === "" || keyword === undefined){
            MySwal.fire({
                html: "You must put a word",
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            return
        }

        if(keyword.length < 3){
            MySwal.fire({
                html: "You must put a word with more than 3 characters",
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
            axios(`${ENPOINT}search/movie?api_key=${API_KEY}&language=${language}&include_adult=${adult}&page=${page}&query=${params["*"]}`)
            .then(res =>{ 
                console.log(res);
                if(res.status === 200){
                    setMoviesList(res.data.results);
                    if(res.data.results.length === 0){
                        MySwal.fire({
                            html: "No results found",
                            icon: 'error',
                            background: "#161d2f",
                            color: "#eee"
                        })
                    }
                }
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
        }
        // redigige si por url busca menos de 2 caracter
        if(params["*"].length < 3 && params["*"].length !== 0){
            navigate("/search")
        }
        console.log(params["*"].length)
    }, [setMoviesList,params,navigate])

    if(!logged) return <Navigate to="/login" />

    return (
        <div className='search'>
            <h2 className='title'>{params["*"] ? params["*"] : "Search"}</h2>
            <div className='search__container'>
                <form onSubmit={handleSubmit} className='search__form'>
                    <input className='search__search' type="search" name='search' placeholder="Movie..." />
                    <input className='search__button' type="submit" value="Search" />
                </form>
                {
                    params["*"]
                    ? <ShowMoviesList data={moviesList} addOrDemoveFromFavorite={addOrDemoveFromFavorite} />
                    : null
                }
            </div>
        </div>
    )
}

export default Search