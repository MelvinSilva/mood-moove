import React from 'react';
import Footer from '../components/Footer';
import Moodday from '../components/Moodday/Moodday';
import Main from '../components/Main';
import Header from '../components/Header';
import Mooddaypopup2 from '../components/Moodday/Mooddaypopup2';



const Accueil = () => {
    return (
        <div>
            <Header />
            <Main />
            <Moodday />
            <Footer />
            <Mooddaypopup2 />   
        </div>
    );
};

export default Accueil;