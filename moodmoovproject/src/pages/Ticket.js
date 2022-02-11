import React from 'react';
import Header from '../components/Header';
import Mooddaypopup from '../components/Moodday/Mooddaypopup';
import BlockPrinc from '../components/Descriptif/BlockPrinc';
import Moodday from '../components/Moodday/Moodday';
import Footer from '../components/Footer';




const Tickets = () => {
    return (
        <div>
            <Header />
            <BlockPrinc />
            <Moodday />
            <Footer />
        </div>
    );
};

export default Tickets;