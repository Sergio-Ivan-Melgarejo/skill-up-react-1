import React from 'react';
import { Outlet } from 'react-router-dom';

// Style
import "../css/search.css";

const Search = () => {
  return (
    <div className='search'>
        <h2 className='title'>Search</h2>
        <form className='search__form'>
            <input className='search__search' type="search" name='search' placeholder="Movie..." />
            <input className='search__button' type="button" value="Search" />
        </form>
        <Outlet />
    </div>
  )
}

export default Search