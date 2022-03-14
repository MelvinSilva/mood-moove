import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const NotFound = () => {
    return (
        <div className="notfound">
            <Header />
            <h1>Oups...je crois qu'il y à une erreur</h1>
            <img src="https://static.vecteezy.com/ti/vecteur-libre/t1/544946-404-oups-mot-pour-la-page-du-site-internet-introuvable-vectoriel.jpg" alt=""/>
            <Footer />
            
        </div>
    );
};

export default NotFound;