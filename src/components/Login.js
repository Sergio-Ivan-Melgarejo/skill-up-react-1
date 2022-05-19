import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

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
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Correo electronico</label>
                <input id='email' type="email" name="email" autoComplete='current-email' />
                <label htmlFor='password'>Contraseña</label>
                <input id='password' type="password" name="password" autoComplete='current-password' />
                <input type="submit" value="login" disabled={false} />
            </form>
        </>
    )
}

export default Login