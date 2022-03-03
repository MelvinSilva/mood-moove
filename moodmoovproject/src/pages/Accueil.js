import React from 'react';
import Footer from '../components/Footer';
import Moodday from '../components/Moodday/Moodday';
import Main from '../components/Main';
import Header from '../components/Header';
import TestAPI from '../components/TestAPI';



const Accueil = () => {
    return (
        <div>
            <Header />
            <Main />
            <Moodday />
            <Footer />   
            <TestAPI />
        </div>
    );
};

export default Accueil;