import React from 'react';
import { FaFacebookF, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (

        <div className="footer">

            <div className="footer-left">
                <img src='logo3.png'/>
            </div>
            <div className='footer-center'>
                <h3 className="titre">Mood'Moove</h3>


                <div className='barre-nav'>
                    <li className='li_nav' >Accueil</li>
                    <li className='li_nav' >Où sortir</li>
                    <li className='li_nav' >Billeterie</li>
                    <li className='li_nav' >Evenement</li>
                    <li className='li_nav' >Contact</li>
                </div>
            </div>

            <div className="footer-right">
                <div className='facebook'><FaFacebookF /> </div>
                <div className='insta'><FaInstagram /></div>
                <div className='twitter'><FaTwitter /></div>
                <div className='google'><FaGoogle /></div>
            </div>
        </div >
    )
};
export default Footer;


