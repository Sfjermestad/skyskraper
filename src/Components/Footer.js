import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logo from './images/Skyskraperlogo.png';
import './Footer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




function Footer() {
    return (
        <>
            <div className="footer">
                <div id="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" id="logo"></img>
                    </Link>
                </div>
                <div id="sm-links">
                    <a href="https://www.facebook.com/skyskraperband" className='sm-links'>
                        <AiIcons.AiFillFacebook/>
                    </a>
                    <a href="https://www.instagram.com/skyskraperband/" className='sm-links'>
                        <AiIcons.AiFillInstagram/>
                    </a>
                    <a href="https://open.spotify.com/artist/3SYUE0c4ieKIJMApQYhzwC?si=p-f_rivrS7iO1k-CALMb9g" className='sm-links'>
                        <FaIcons.FaSpotify/>
                    </a>
                </div>
                <div id="footer-text">
                    Copyright Skyskraper 2021 | <a href="mailto:contact@skyskraperband.com">Contact</a> |  
                    Art & images by <a href="https://www.facebook.com/fotografeivindhorne">Eivind Horne</a> | Website by Sveinung Fjermestad
                </div>

            </div>
        </>
    )
}

export default Footer