import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Moodday from './Moodday';

const Mooddaypopup4 = () => {
    return (
        <div>
            <Header />
            <div id="moodpopup4" className="popimg">
		        <a href="https://latetedanslesnuages.com/"><button className="img10"></button></a>
		        <a href="http://gossima.fr/"><button className="img11"></button></a>
		        <a href="https://jai-un-pote-dans-la.com/paris-enfin-son-cafe-en-2d-decor-bande-dessinee/"><button className="img12"></button></a>
            </div>
            <Moodday />
            <Footer />
        </div>
    );
};

export default Mooddaypopup4;