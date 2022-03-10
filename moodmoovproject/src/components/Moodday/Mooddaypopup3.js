import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Moodday from './Moodday';

const Mooddaypopup3 = () => {
    return (
        <div>
            <Header />
            <div id="moodpopup3" className="popimg">
		        <a href='https://www.booking.com/hotel/fr/terrass-paris.fr.html'><button className="img7"></button></a>
		        <a href='https://monparisjoli.com/2015/02/02/10-idees-de-promenades-romantiques-a-paris/'><button className="img8"></button></a>
		        <a href='https://www.cieldeparis.com/'><button className="img9"></button></a>
            </div>
            <Moodday />
            <Footer />
        </div>
    );
};

export default Mooddaypopup3;