import React from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (

        <
        div className = "header" >
        <
        div className = "navigation" >
        <
        NavLink to = "/accueil"
        className = {
            ({ isActive }) =>
            "nav-link" + (isActive ? "--active" : "")
        } >
        Accueil <
        /NavLink> <
        NavLink to = "/contact"
        className = {
            ({ isActive }) =>
            "nav-link" + (isActive ? "--active" : "")
        } >
        Contact <
        /NavLink> <
        NavLink to = "/avis"
        className = {
            ({ isActive }) =>
            "nav-link" + (isActive ? "--active" : "")
        } >
        Avis clients <
        /NavLink> <
        /div> <
        h1 className = "title-header" > M < span > OO < /span>D M<span>OO</span > VE < /h1> <
        h3 className = "title-header-h3" > Sortir est une aventure, un saut dans l 'inconnu, un nouveau départ</h3> <
        div className = "logo-header" >
        <
        img src = "/logo3.png"
        alt = "logo" / >
        <
        /div>            <
        /div>
    );
};

export default Header;