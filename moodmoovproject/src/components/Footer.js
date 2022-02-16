import React from 'react';
import { FaFacebookF, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (

        <div className="footer">

            <div className="footer-left">
                <img src='logo3.png' alt='logo3'/>
            </div>
            <div className='footer-center'>
                <h3 className="titre">Mood'Moove</h3>


                <div className='barre-nav'>
                    <li className='li_nav' >Où sortir</li>
                    <li className='li_nav' >Billeterie</li>
                    <li className='li_nav' >Evènement</li>
                    <li className='li_nav' > Nous Contacter</li>
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


