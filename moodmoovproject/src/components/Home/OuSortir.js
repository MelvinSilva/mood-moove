import React from 'react';
import '../../styles/Components/Home/OuSortir.scss';
import { useNavigate } from 'react-router-dom';

const OuSortir = () => {
    let navigate = useNavigate()
    let handleClick= ()=>{
        navigate('unepref')
    }
    return (
        <div className='ouSortir'>
            <p className='ouSortir__text'>OU SORTIR ?</p>
            <input className='ouSortir__btn1' placeholder='Ville' />
            <input className='ouSortir__date' type="date" id="start" name="trip-start required"
       min="2022-01-01" max="2025-12-31" />
            <button onClick={handleClick} className='ouSortir__btnVal'>VALIDER</button>
        </div>
    );
};

export default OuSortir;