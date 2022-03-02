import React from 'react';
import Footer from '../components/Footer';
import Moodday from '../components/Moodday/Moodday';
import Main from '../components/Main';
import Header from '../components/Header';






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