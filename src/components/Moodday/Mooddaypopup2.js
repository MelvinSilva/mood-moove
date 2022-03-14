import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Moodday from './Moodday';

const Mooddaypopup2 = () => {
    return (
        <div>
            <Header />
            <div id="moodpopup2" className="popimg">
		        <a href='https://www.loftmetropolis.com/'><button className="img4"></button></a>
		        <a href='https://www.glazart.com/'><button className="img5"></button></a>
		       <a href='http://larc-paris.com/'><button className="img6"></button></a>
            </div>
            <Moodday />
            <Footer />
        </div>
    );
};

export default Mooddaypopup2;