import React from 'react';
import AutresChoix from './AutreChoix';


const UnePref = () => {
    return (
        <div className='unePref'>
            <p className='unePref__text'>UNE PREFERENCE</p>
            <button className='unePref__btn1'>Théatre</button>
            <button className='unePref__btn2'>Spectacle</button>
            <button className='unePref__btn3'>Musée</button>
            <button className='unePref__btn4'>Concert</button>
            <button  onClick={AutresChoix} className='unePref__btnVal'>Validé</button>
            
        </div>
    );
};

export default UnePref;
