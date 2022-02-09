import React from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (

        <div className="header">
        <div className="logo">
            <img src="logo192.png" alt="logo" />
            <h3> React World </h3>
            
        </div>

        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
                </NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">
                A propos
                </NavLink>
        </div>
        </div>
    );
};

export default Header;