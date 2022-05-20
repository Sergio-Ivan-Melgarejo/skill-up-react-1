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
    <div className='list'>Listado</div>
  )
}

export default List