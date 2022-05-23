import React, { useContext } from 'react'

// context
import LanguageContext from '../context/LanguageContext'

const Error = () => {
    const {texts} = useContext(LanguageContext);
    return (
        <div className='error'>
            <h2 className='title'>Error</h2>
            <div className='detalle reverse'>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
            </div>
            <p className='nothing error'>{texts.error.line1}</p>
            <div className='detalle'>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
                <div className='detalle__box error'></div>
            </div>
        </div>
    )
}

export default Error