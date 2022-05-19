import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h2>soy el header</h2>
        <nav>
            <ul>
                <li>
                    <NavLink className={(isActive)=>(isActive ? "nav-link active" : "nav-link")} to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>(isActive ? "nav-link active" : "nav-link")} to="/listado" >Listado</NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>(isActive ? "nav-link active" : "nav-link")} to="/contacto" >Contacto</NavLink>
                </li>
            </ul>    
        </nav>    
    </header>
  )
}

export default Header