import React from 'react'

// Library
import axios from 'axios'
import Swal from 'sweetalert2'

// components
import { useNavigate } from 'react-router-dom'

// Style
import "../css/login.css"

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(email === "" || password === ""){
            Swal.fire("Los campos no pueden estar vacios")
            return
        }

        if(email !== ""  && !regexEmail.test(email)){
            Swal.fire("Debes escribir una direcion de correo valida")
            return
        }
        
        if(regexEmail !== "challenge@alkemy.org"  && password !== "react"){
            Swal.fire("Credenciales Invalidas")
            return
        }

        const URL = "http://challenge-react.alkemy.org/";
        axios.post(URL,{
            email:email,
            password:password
        })
        .then(res=> {
            console.log(res)
            if(res.status === 200) {
                localStorage.setItem("token",res.data.token)
                Swal.fire("Ingresado correctamente")
                navigate("/")
            }
        })
        .catch(error => {
            console.log(error)
            Swal.fire("Ocurrio un error, vuelva a intentelo mas tarder")
        })
    }

    return ( 
        <div className='login'>
            <h2 className='login__title'>Login</h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <label className='label' htmlFor='email'>Correo electronico</label>
                <input className='input' id='email' type="email" name="email" autoComplete='current-email' />
                <label className='label' htmlFor='password'>Contraseña</label>
                <input className='input' id='password' type="password" name="password" autoComplete='current-password' />
                <input className='btn' type="submit" value="login" disabled={false} />
            </form>
        </div>
    )
}

export default Login