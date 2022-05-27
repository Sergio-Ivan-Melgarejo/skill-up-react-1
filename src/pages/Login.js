import React, { useContext, useState } from 'react';

// components
import { Navigate, useNavigate } from 'react-router-dom';

// Styles
import "../css/login.css";

// Context
import LanguageContext from '../context/LanguageContext';

// extra
import img from "../img/bg.jpg"; 

// Librarys
// import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../components/Loader';
const MySwal = withReactContent(Swal);


const Login = ({logged,setLogged}) => {
    const [loadin, setLoadin] = useState(false)
    const {texts} = useContext(LanguageContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoadin(true)

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(email === "" || password === ""){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>{texts.login.msg1}</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            setLoadin(false)
            return
        }

        if(email !== ""  && !regexEmail.test(email)){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>{texts.login.msg2}</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            setLoadin(false)
            return
        }
       
        if(email !== "challenge@alkemy.org" || password !== "react"){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>{texts.login.msg3}</i>,
                icon: 'error',
                background: "#161d2f",
                color: "#eee"
            })
            setLoadin(false)
            return
        }

        // genera en el navegador problemas de seguridad por que esta HTTP

        // const URL = "http://challenge-react.alkemy.org/";
        // axios.post(URL,{
        //     email:email,
        //     password:password
        // })
        // .then(res=> {
        //     console.log(res)
        //     if(res.status === 200) {
        //         localStorage.setItem("token",res.data.token);
        //         setLogged(res.data.token);
        //         MySwal.fire({
        //             title: <strong>{texts.login.msg4}</strong>,
        //             icon: 'success',
        //             background: "#161d2f",
        //             color: "#eee"
        //         })
        //         navigate("/")
        //     }
        // })
        // .catch(error => {
        //     console.log(error)
        //     MySwal.fire({
        //         title: <strong>Error</strong>,
        //         html: <i>{texts.login.error}</i>,
        //         icon: 'error',
        //         background: "#161d2f",
        //         color: "#eee"
        //     })
        //     setLoadin(false)
        // })

        // Simulo la peticion, por problemas de seguridad y porotolos https
        setTimeout(()=>{
            let falseToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE";
            localStorage.setItem("token",falseToken);
            setLogged(falseToken);
            MySwal.fire({
                title: <strong>{texts.login.msg4}</strong>,
                icon: 'success',
                background: "#161d2f",
                color: "#eee"
            })
            navigate("/")
            setLoadin(false)
        },1000)
    }

    if(logged) return <Navigate to="/" />

    return ( 
        <div className='login'>
            
            <div className='login__bg-container'>
                <div className='login__img-container'>
                    <img className='login__img' src={img} alt=''/>
                    <div className='login__shadow'></div>
                </div>

                <h1 className='login__logo'>{texts.login.title}</h1>

                {
                    !loadin
                    ?   <>
                            <form className='login__form' onSubmit={handleSubmit}>
                                <label className='label' htmlFor='email'>{texts.login.label1}</label>
                                <input className='input' id='email' type="email" name="email" autoComplete='current-email' placeholder='challenge@alkemy.org'/>
                                <label className='label' htmlFor='password'>{texts.login.label2}</label>
                                <input className='input' id='password' type="password" name="password" autoComplete='current-password' placeholder='react' />
                                <input className='btn' type="submit" value={texts.login.title} disabled={false} />
                                <p className='toDelete'>{texts.login.label1}: challenge@alkemy.org</p>
                                <p className='toDelete'>{texts.login.label2}: react</p>
                            </form> 
                        </>
                    :   <Loader />
                }
            </div>

        </div>
    )
}

export default Login