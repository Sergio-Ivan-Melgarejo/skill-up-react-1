import React, { useEffect } from 'react';

// Components
import { useNavigate } from 'react-router-dom';

// Library
import "../css/list.css";

const List = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token === null) navigate("/login")
  }, [navigate])
 

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