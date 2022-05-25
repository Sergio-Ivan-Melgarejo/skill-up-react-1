import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Style 
import "../css/home.css";

// Context
import LanguageContext from '../context/LanguageContext';

// extra
import img from "../img/bg.jpg";

const Home = ({logged}) => {
  const {texts,handleLanguage} = useContext(LanguageContext);
  return (
      <>
        <div className='home'>
            <div className='home__bg-container'>
              <div className='home__img-container'>
                <img className='home__img' src={img} alt=''/>
                <div className='home__shadow'></div>
              </div>

              <h1 className='home__title'>Alkeflix</h1>

              <div className='home__text-container'>
                <p className='home__text'>
                  <span className='home__line-text'>{texts.home.line1}</span>
                  <span className='home__line-text'>{texts.home.line2}</span>
                </p>
              </div>
                {
                  logged 
                  ?   <p className='home__msg'>
                        {texts.home.mgs1} 
                        <Link to="/search" className='home__link btn'>{texts.home.btn1}</Link> 
                        {texts.home.mgs2}  
                        <Link to="/trends" className='home__link btn'>{texts.home.btn2}</Link> 
                        {texts.home.mgs3} 
                        <Link to="/favorites" className="home__link btn">{texts.home.btn3}</Link>
                      </p>
                  :   <p className='home__msg'>
                        {texts.home.mgs4} 
                        <Link to="/login" className='home__link btn'>{texts.home.btn4} </Link> 
                        {texts.home.mgs5} 
                      </p>  
                }

                <button onClick={handleLanguage} className='language-btn btn'>{texts.home["language-btn"]}</button>
            </div>
        </div>
      </>
  )
}

export default Home