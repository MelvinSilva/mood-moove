import React from 'react';
import Footer from '../components/Footer';
import Moodday from '../components/Moodday/Moodday';
import Header from '../components/Header';
import Main from '../components/Main';




const Accueil = () => {
    return (
        <div>
            <Header />
            <Main />
            <Moodday />
            <Footer />   
        </div>
    );
};

export default Accueil;