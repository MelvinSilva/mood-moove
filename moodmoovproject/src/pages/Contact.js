import React from 'react';
import Header from '../components/Header';
import Moodday from '../components/Moodday/Moodday';
import Footer from '../components/Footer';



const Accueil = () => {
    return (
        <div>
            <Header />
            <Moodday />
            <Footer />
        </div>
    );
};

export default Accueil;