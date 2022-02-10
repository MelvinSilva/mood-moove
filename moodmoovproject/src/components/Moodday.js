import React from 'react';
import "../styles/Components/moodday.scss"
import Mooddaypopup from './Mooddaypopup';

const Moodday = () => {
    return (
        <div>
            <h2>Mood du jour</h2>
            <div id="contenu" className="moodimg">
		        <button className="imgMaison" >A la Maison</button>
		        <button className="imgFetard">Fétard</button>
		        <button className="imgAmoureux">En Amoureux</button>
		        <button className="imgAmis">Entre Amis</button>
		        <button className="imgFamille">En Famille</button>
            </div>
        </div>
    );
};

export default Moodday;