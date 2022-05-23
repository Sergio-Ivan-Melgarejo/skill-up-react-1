import React from 'react';
import "../css/loader.css";

const Loader = () => {
  return (
    <div className='loader'>
        <div className='loader__line'></div>
        <div className='loader__line'></div>
        <div className='loader__line'></div>
        <div className='loader__line'></div>
        <div className='loader__line'></div>
    </div>
  )
}

export default Loader