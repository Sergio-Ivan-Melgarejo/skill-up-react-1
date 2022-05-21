import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';

// Librarys
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const API_KEY = "599b1ab5492b9cdab8144e5bf20b6ae5";
const ENPOINT = "https://api.themoviedb.org/3/";
const language = "en-US";
const adult = "false";

const Detail = () => {
    // Redirect if user is not logged
    const token = localStorage.getItem("token");

    const params = useParams();

    useEffect(() => {
        const {id} = params;
        console.log(id)

        axios(`${ENPOINT}movie/${id}?api_key=${API_KEY}&language=${language}`)
        .then(res =>{ 
        console.log(res);
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
  
    if(!token) return <Navigate to="/login" />
    return (
        <div>Detail</div>
    )
}

export default Detail