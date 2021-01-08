import React from 'react'
import './music.css';
import floorone from './images/floor.jpg'

function music() {
    return (
        <div id='music-wrapper'>
            <div className="release">
                <img src={floorone} alt="Floor One Cover" className="artwork"></img>
                <div className='release-info'>
                    <div className='release-title'>Floor One (EP)</div>
                    <div>Released: 19th june 2020</div>
                    <div>Produced by Samuel Nimoson and Skyskraper</div>
                    <div>Mastered by Jonathan Grant Berlin</div>
                    <div>Artwork by Eivind Horne</div>
                    <div>Tracklisting:</div>
                    <div>How Come (2:45)</div>
                    <div>Again (3:10)</div>
                    <div>Refuge (3:38)</div>
                    <div>You Will Never End (3:37)</div>
                </div>
            </div>
        </div>
    )
}

export default music