import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Moodday from './Moodday';

const Mooddaypopup = () => {
    return (
        <div>
            <Header />
            <div id="moodpopup" className="popimg">
		        <a href='https://www.netflix.com/fr/'><button className="img1"></button></a>
		        <a href='https://www.primevideo.com/'><button className="img2"></button></a>
		        <a href='https://www.disneyplus.com/fr-fr'><button className="img3"></button></a>
            </div>
            <Moodday />
            <Footer />


        </div>
    );
};

export default Mooddaypopup;