import React from 'react';
import { FaFacebookF, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom"
const Footer = () => {
    return (
        <div>
            <div className="footer">

                <div className="footer-left">
                    <img src='logo3.png' alt='logo3' />
                </div>
                <div className='footer-center'>
                    <h3 className="title-header">M<span>OO</span>D M<span>OO</span>VE</h3>


                    <div className="navigation">
                        <NavLink to="/" className={({isActive}) =>
                        "nav-link" + (isActive ? "--active" : "")}>
                            Accueil
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) =>
                        "nav-link" + (isActive ? "--active" : "")}>
                            Contact
                        </NavLink>
                        <NavLink to="/avis" className={({isActive}) =>
                        "nav-link" + (isActive ? "--active" : "")}>
                            Avis clients
                        </NavLink>
                    </div>
                </div>

                <div className="footer-right">
                    <div className='facebook'><FaFacebookF /> </div>
                    <div className='insta'><FaInstagram /></div>
                    <div className='twitter'><FaTwitter /></div>
                    <div className='google'><FaGoogle /></div>
                </div>
            </div >

            <div className="footer2">
                <div className='footer-center'>
                    <h3 className="titre">Mood'Moove</h3>
                    {/* <h3 className="title-header">M<span>OO</span>D M<span>OO</span>VE</h3> */}


                    <div className="navigation">
                        <NavLink to="/" className={({isActive}) =>
                        "nav-link" + (isActive ? "--active" : "")}>
                            Accueil
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) =>
                        "nav-link" + (isActive ? "--active" : "")}>
                            Contact
                        </NavLink>
                        <NavLink to="/avis" className={({isActive}) =>
                        "nav-link" + (isActive ? "--active" : "")}>
                            Avis clients
                        </NavLink>
                    </div>
                </div>

                <div className="footer-right3">
                    <div className='twitter'><FaTwitter /></div>
                    <div className='google'><FaGoogle /></div>
                    <div className='facebook'><FaFacebookF /> </div>
                    <div className='insta'><FaInstagram /></div>
                </div>
            </div >
        </div>
    )
};
export default Footer;


