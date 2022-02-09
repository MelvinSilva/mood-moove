import React from 'react';
import '../../styles/Components/Home/OuSortir.scss'

const OuSortir = () => {
    return (
        <div className='ouSortir'>
            <p className='ouSo'>Où Sortir</p>
            <input placeholder='Ville' />
            <input type="date" id="start" name="trip-start required"
       min="2022-01-01" max="2025-12-31" />
            <button>Validé</button>
        </div>
    );
};

export default OuSortir;