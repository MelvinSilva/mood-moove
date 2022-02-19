import React from 'react';
import { useNavigate } from 'react-router-dom';


const UnePref = () => {
    let navigate = useNavigate()
    let handleClick= ()=>{
        navigate('/accueil/autrechoix')
    }
    return (
        <div className='unePref'>
            <p className='unePref__text'>UNE PRÉFÉRENCE</p>
            <button className='unePref__btn1'>Théatre</button>
            <button className='unePref__btn2'>Spectacle</button>
            <button className='unePref__btn3'>Musée</button>
            <button className='unePref__btn4'>Concert</button>
            <button onClick={handleClick} className='unePref__btnVal'>VALIDER</button>
        </div>
    );
};

export default UnePref;