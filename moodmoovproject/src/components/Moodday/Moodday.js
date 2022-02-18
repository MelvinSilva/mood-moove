import React from 'react';
import { Link } from 'react-router-dom';



const Moodday = () => {
    return (
        <div>
                
            <h1>Mood du jour</h1>
            <div id="contenu" className="moodimg">
                <Link to="/mooddaypop"><button className="imgMaison" ></button></Link>
                <Link to="/mooddaypop2"><button className="imgFetard"></button></Link>
                <Link to="/mooddaypop3"><button className="imgAmoureux"></button></Link>
                <Link to="/mooddaypop4"><button className="imgAmis"></button></Link>
                <Link to="/mooddaypop5"><button className="imgFamille"></button></Link>
            </div>
        </div>
    );
};

export default Moodday;