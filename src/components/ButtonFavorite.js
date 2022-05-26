import React, { useContext, useEffect, useState } from 'react';

// Style
import "../css/buttonFavorite.css";

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteOrRemove } from "../actions/favoriteActions"

// context
import LanguageContext from '../context/LanguageContext';

// Librarys
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const ButtonFavorite = ({data}) => {
  const {texts} = useContext(LanguageContext);
  const {favorites} = useSelector(state=> state); 
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // if(favorites){
      if(favorites.find(ele=>ele.id === data.id)){
        setSaved(true)
        }
      else{
        setSaved(false)
      }
    // }
  }, [favorites])

  const handleClick = () =>{
    dispatch(addFavoriteOrRemove(data));
    if(!saved){
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: texts.extra.line2,
        showConfirmButton: false,
        timer: 1500,
        background: "#161d2f",
        color: "#eee"
      })
    }
    else{
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: texts.extra.line3,
        showConfirmButton: false,
        timer: 1500,
        background: "#161d2f",
        color: "#eee"
      })
    }
  }

  return (
    <button className='buttonFavorite' onClick={handleClick}>
      {
        saved
        ?   <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></svg>
        :   <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"/></svg>
      }
    </button>
  )
}

export default ButtonFavorite