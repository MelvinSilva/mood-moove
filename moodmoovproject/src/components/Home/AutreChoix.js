import React from 'react';

const AutreChoix = () => {
    return (
        <div className='autreChoix'>
            <p className='autreChoix__text'>AUTRE CHOIX</p>
            <button className='autreChoix__btn1'>Cinéma</button>
            <button className='autreChoix__btn2'>Visite</button>
            <button className='autreChoix__btn3'>Netflix</button>
            <button className='autreChoix__btn4'>Aléatoire</button>
            <button className='autreChoix__btnVal'>Validé</button>
        </div>
    );
};

export default AutreChoix;