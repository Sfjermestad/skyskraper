import React from 'react'
import './about.css';
import bandpicture from './images/skyskraperlive.jpg'

function about() {
    return (
        <div className='about'>
            <div id='wrapper'>
                <img src={bandpicture} alt="Skyskraper" className="bandpicture"></img>
                <div id='about-text'>
                Skyskraper is an up and coming alt/indie act from Stavanger, Norway. 
                The group formed in 2017, releasing their debut-single "Heaven and Earth" December 2018. 
                The band draws inspiration from music that inspires and breaks creative boundaries. 
                The members of the band met in a church in Stavanger were they served at services. 
                They all wanted to do something more with music and therefore formed the band, 
                hoping to bring something new to the christian music stage. 
                Their debut EP ‘Floor One’ was released on Egenes Records 19th June 2020.
                </div>
            </div>
        </div>
    )
}

export default about