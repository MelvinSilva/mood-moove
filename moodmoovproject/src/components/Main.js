import React from 'react';
import backgroundVideo from '../video/arc6.mp4';
import BlocUnik from './BlocUnik';


const Main = () => {
    return (
        
        <div className='Home'>
            
            <video autoPlay loop muted id='video'>
            <source src={backgroundVideo} type='video/mp4'/>
            </video>
         <BlocUnik />
       </div>
       
    );
};

export default Main;