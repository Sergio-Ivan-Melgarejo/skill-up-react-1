import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

// Components
import ShowMoviesList from '../components/ShowMoviesList';

// Context
import LanguageContext from '../context/LanguageContext';
import { reset } from "../actions/favoriteActions"

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Style
import "../css/favorite.css"

// Librarys
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Favorites = ({logged}) => {
    const {texts} = useContext(LanguageContext);
    const {favorites} = useSelector(state=> state); 
    const dispatch = useDispatch();
    
    if(!logged) return <Navigate to="/login" />

    const handleClick = () =>{
        MySwal.fire({
            title: texts.header.msg1,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: texts.header.msg2,
            cancelButtonText: texts.header.msg3,
            background: "#161d2f",
            color: "#eee"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(reset());
            }
        })
    }

    return (
        <div className='favorites'>
            <div className='favorites__container'>
                <h2 className='title'>{texts.favorite.title}</h2>
                {
                    favorites.length > 0
                    ?   <button onClick={handleClick} className='btn'>{texts.favorite.btn}</button>
                    :   null
                }
            </div>
            <div className='search__container'>
                {
                    favorites
                    ?   <>
                        {   
                            favorites.length !== 0
                            ?   <ShowMoviesList data={favorites} />
                            :   <>
                                    <p className='nothing'>{texts.favorite.line1}</p>
                                    <div className='detalle'>
                                        <div className='detalle__box'></div>
                                        <div className='detalle__box'></div>
                                        <div className='detalle__box'></div>
                                        <div className='detalle__box'></div>
                                        <div className='detalle__box'></div>
                                    </div>
                                </>
                        }
                        </>
                    :   null
                }
            </div>
        </div>
  )
}

export default Favorites