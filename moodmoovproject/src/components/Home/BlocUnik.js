import React from 'react';
import { Outlet } from 'react-router-dom';

const BlocUnik = () => {
    return (
        <div className='unik'>
            <Outlet />
        </div>
    );
};

export default BlocUnik;