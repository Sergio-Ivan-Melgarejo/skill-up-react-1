import React from 'react';
import { Outlet } from 'react-router-dom';

// Style
import "../css/search.css";

// Librarys
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Search = () => {
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
        }

        if(keyword.length < 3){
            MySwal.fire({
                html: "You must put a word with more than 3 characters",
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
        }
    }
    return (
        <div className='search'>
            <h2 className='title'>Search</h2>
            <form onSubmit={handleSubmit} className='search__form'>
                <input className='search__search' type="search" name='search' placeholder="Movie..." />
                <input className='search__button' type="submit" value="Search" />
            </form>
            <Outlet />
        </div>
    )
}

export default Search