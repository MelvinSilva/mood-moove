import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            

            <div className='block'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;