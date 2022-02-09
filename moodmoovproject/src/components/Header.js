import React from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (

        <div className="header">
            <div className="navigation">
                <NavLink exact to="/" activeClassName="nav-active">
                    Accueil
                </NavLink>
                <NavLink exact to="/billeterie" activeClassName="nav-active">
                    Billeterie
                </NavLink>
                <NavLink exact to="/events" activeClassName="nav-active">
                    Evenements
                </NavLink>
                <NavLink exact to="/contact" activeClassName="nav-active">
                    Contact
                </NavLink>
            </div>
            <h1>M<span>OO</span>D M<span>OO</span>VE</h1>
            <h3>Sortir est une aventure, un saut dans l'inconnu, un nouveau départ</h3>
            <div className="logo">
                <img src="logo3.png" alt="logo" />
            </div>
           
        </div>
    );
};

export default Header;