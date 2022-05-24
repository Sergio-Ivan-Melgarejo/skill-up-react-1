import React from 'react';
import { Link } from 'react-router-dom';

// Style 
import "../css/home.css";

import img from "../img/bg.jpg"; 

const Home = ({logged}) => {
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
                  <span className='home__line-text'>Unlimited movies</span>
                  <span className='home__line-text'>Watch anywhere. Cancel anytime.</span>
                </p>
              </div>
                {
                  logged 
                  ?   <p className='home__msg'>
                        Welcome user, search in the 
                        <Link to="/search" className='home__link btn'>search section</Link> 
                        or see the current trend in the 
                        <Link to="/trends" className='home__link btn'>trends section</Link> 
                        and save what you want in 
                        <Link to="/favorites" className="home__link btn">favorites</Link>
                      </p>
                  :   <p className='home__msg'>Ready to watch?
                        <Link to="/login" className='home__link btn'>Sign in</Link> 
                        to be able to search and see more.
                      </p>  
                }
            </div>
        </div>
      </>
  )
}

export default Home