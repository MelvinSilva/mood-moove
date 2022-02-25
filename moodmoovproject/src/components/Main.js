import React from 'react';
import BlocUnik from './BlocUnik';
import Video from '../arcResize.mov'

const Main = () => {
    return (
        <div>
            <video autoPlay mute loop className="video" src={Video}  />

            <div className='Home'>
                <BlocUnik />
            </div>
        </div>
    );
};

export default Main;