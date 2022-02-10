import React from 'react';
import '../../styles/Components/Home/OuSortir.scss'

const OuSortir = () => {
    return (
        <div className='ouSortir'>
            <p className='ouSortir__text'>Où Sortir</p>
            <input className='ouSortir__btn1' placeholder='Ville' />
            <input className='ouSortir__date' type="date" id="start" name="trip-start required"
       min="2022-01-01" max="2025-12-31" />
            <button className='ouSortir__btnVal'>Validé</button>
        </div>
    );
};

export default OuSortir;