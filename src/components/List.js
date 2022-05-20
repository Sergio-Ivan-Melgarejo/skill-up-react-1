import React from 'react';

// Components
import {  Navigate } from 'react-router-dom';

// Library
import "../css/list.css";

const List = () => {
  // Redirect if user is not logged
  const token = localStorage.getItem("token");
  if(!token) return <Navigate to="/login" />

  return (
    <>
      <h2 className='title'>List</h2>
      <div className='list'>
        <div className='movie'>
          <div className='movie__container'>
            <img className='movie__img' src='' alt=''/>
            <p className='movie__description'>de d as das d as d as d as d asdsada sd a sd a sd as d as d  as d asd  asd ad</p>
          </div>
          <h3 className='movie__title'>title</h3>
        </div>
      </div>
    </>
  )
}

export default List