import React from 'react';
import Video from '../arcResize.mov'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <video autoPlay mute loop className="video" src={Video}  />

            <div className='Home'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;