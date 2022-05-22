import React, { useState } from 'react';

// Components
import { NavLink } from 'react-router-dom';

// Style
import "../css/header.css";

// IMG
import avatar from "../img/avatar.png";

// Library
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function Header ({logged,setLogged}) {
    const [openConf, setOpenConf] = useState(false);
    const handleOpenConf = () => setOpenConf(!openConf);

    const handleSingOut = () => {
        MySwal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I am!',
            background: "#161d2f",
            color: "#eee"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                handleOpenConf();
                setLogged(false);
            }
        })
    }

    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/" >
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg>
                            <span className='span'>Home</span> 
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/search" >
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                            <span className='span'>Search</span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/trends" >
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"/></svg>
                            <span className='span'>Trends</span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/genres" >
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z"/></svg>
                            <span className='span'>Genres</span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/contact" >
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"/></svg>
                            <span className='span'>Favorites</span>
                        </NavLink>
                    </li>
                </ul>  
                
                {
                    logged 
                    ?   <div onClick={handleOpenConf} className={openConf ? 'nav-item nav-user open' : 'nav-item nav-user'}>
                            <img className='avatar' src={avatar} alt="avatar"/>
                        </div>
                    :   <div className='nav-item nav-user'>
                            <NavLink className="nav-link" to="/login" >
                                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                                <span className='span'>Login</span>
                            </NavLink>
                        </div> 
                }
            </nav>
                {
                    logged
                    ?   <> 
                            <ul className={openConf ? "avatar-conf open" :'avatar-conf'}>
                                <li className='li'>
                                    <button onClick={handleSingOut} className='btn'>Sing out</button>
                                </li>
                            </ul>
                            <div onClick={handleOpenConf} className={openConf ? 'shadow open' : 'shadow'}></div> 
                        </> 
                    :   null
                }
        </header>
    )
}

export default Header