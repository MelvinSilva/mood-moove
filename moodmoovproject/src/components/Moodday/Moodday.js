import React from 'react';

const Moodday = () => {
    return (
        <div>
            <h1>Mood du jour</h1>
            <div id="contenu" className="moodimg">
		        <button className="imgMaison" ></button>
		        <button className="imgFetard"></button>
		        <button className="imgAmoureux"></button>
		        <button className="imgAmis"></button>
		        <button className="imgFamille"></button>
            </div>
        </div>
    );
};

export default Moodday;