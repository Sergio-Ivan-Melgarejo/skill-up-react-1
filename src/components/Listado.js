import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Listado = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token === null) navigate("/login")
  }, [])
 

  return (
    <div>Listado</div>
  )
}

export default Listado