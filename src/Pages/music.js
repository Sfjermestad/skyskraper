import React from 'react'
import './music.css';
import floorone from './images/floor.jpg'
import again from './images/again.jpg'
import you from './images/you.jpg'
import heaven from './images/heaven.jpg'
import { Route } from "react-router-dom";

function music() {
    return (
        <Route path='/privacy-policy' component={() => { 
            window.location.href = 'https://distrokid.com/hyperfollow/skyskraper/floor-one'; 
            return null;
       }}/>
        // <div id='music-wrapper'>
        //     <div className="release">
        //         <img src={floorone} alt="Floor One Cover" className="artwork"></img>
        //         <div className='release-info'>
        //             <div className='release-title'>Floor One (EP)</div>
        //             <div>Released: 19th June 2020</div>
        //             <div>Produced by Samuel Nimoson and Skyskraper</div>
        //             <div>Mixed by Tore Kulleseid and Stian Hansen</div>
        //             <div>Mastered by Jonathan Grant Berlin</div>
        //             <div>Artwork by Eivind Horne</div>
        //             <div>Tracklisting:</div>
        //             <div>How Come (2:45)</div>
        //             <div>Again (3:10)</div>
        //             <div>Refuge (3:38)</div>
        //             <div>You Will Never End (3:37)</div>
        //         </div>
        //     </div>

        //     <div className="release">
        //         <img src={again} alt="Again Cover" className="artwork"></img>
        //         <div className='release-info'>
        //             <div className='release-title'>Again (single)</div>
        //             <div>Released: 30th August 2019</div>
        //             <div>Produced by Samuel Nimoson and Skyskraper</div>
        //             <div>Mixed by Tore Kulleseid</div>
        //             <div>Mastered by Jonathan Grant Berlin</div>
        //             <div>Artwork by Eivind Horne</div>
        //         </div>
        //     </div>

        //     <div className="release">
        //         <img src={you} alt="You will never end Cover" className="artwork"></img>
        //         <div className='release-info'>
        //             <div className='release-title'>You Will Never End (single)</div>
        //             <div>Released: 29th March 2019</div>
        //             <div>Produced by Samuel Nimoson and Skyskraper</div>
        //             <div>Mixed by Tore Kulleseid</div>
        //             <div>Mastered by Jonathan Grant Berlin</div>
        //             <div>Artwork by Eivind Horne</div>
        //         </div>
        //     </div>

        //     <div className="release">
        //         <img src={heaven} alt="Heaven And Earth Cover" className="artwork"></img>
        //         <div className='release-info'>
        //             <div className='release-title'>Heaven And Earth (single)</div>
        //             <div>Released: 14th December 2018</div>
        //             <div>Produced by Tore Kulleseid</div>
        //             <div>Mixed by Tore Kulleseid</div>
        //             <div>Mastered by Jonathan Grant Berlin</div>
        //             <div>Artwork by Eivind Horne</div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default music