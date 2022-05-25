import React from 'react';


// components
import { Navigate, useNavigate } from 'react-router-dom';

// Styles
import "../css/login.css";

import img from "../img/bg.jpg"; 

// Librarys
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


const Login = ({logged,setLogged}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(email === "" || password === ""){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>The fields cannot be empty</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            return
        }

        if(email !== ""  && !regexEmail.test(email)){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>You must write a valid email</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            return
        }
        
        if(regexEmail !== "challenge@alkemy.org"  && password !== "react"){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Invalid Credentials</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
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
                localStorage.setItem("token",res.data.token);
                setLogged(res.data.token);
                MySwal.fire({
                    title: <strong>Entered correctly</strong>,
                    icon: 'success',
                    background: "#161d2f",
                    color: "#eee"
                })
                navigate("/")
            }
        })
        .catch(error => {
            console.log(error)
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>An error occurred, please try again later</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
        })
    }

    if(logged) return <Navigate to="/" />

    return ( 
        <div className='login'>
            
            <div className='login__bg-container'>
                <div className='login__img-container'>
                    <img className='login__img' src={img} alt=''/>
                    <div className='login__shadow'></div>
                </div>

                <h1 className='login__logo'>Alkeflix</h1>

                <h2 className='login__title'>Sign In</h2>
                <form className='login__form' onSubmit={handleSubmit}>
                    <label className='label' htmlFor='email'>Email</label>
                    <input className='input' id='email' type="email" name="email" autoComplete='current-email' placeholder='challenge@alkemy.org'/>
                    <label className='label' htmlFor='password'>Password</label>
                    <input className='input' id='password' type="password" name="password" autoComplete='current-password' placeholder='react' />
                    <input className='btn' type="submit" value="Sign In" disabled={false} />
                    <p className='toDelete'>Email: challenge@alkemy.org</p>
                    <p className='toDelete'>password: react</p>
                </form>
            </div>

        </div>
    )
}

export default Login