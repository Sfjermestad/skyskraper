import React from 'react'
import './music.css';
import floorone from './images/floor.jpg'

function music() {
    return (
        <div className='about'>
            <div id='music-wrapper'>
                <div className="release">
                    <img src={floorone} alt="Floor One Cover" className="artwork"></img>
                    <div className='release-info'>
                        Floor One (EP)
                        Released: 19th june 2020
                        Produced by Samuel Nimoson and Skyskraper
                        Mastered by Jonathan Grant Berlin
                        Artwork by Eivind Horne
                        Tracklisting:
                        How Come (2:45)
                        Again (3:10)
                        Refuge (3:38)
                        You Will Never End (3:37)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default music