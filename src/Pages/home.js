import React, { useState } from 'react';
import './home.css'
import { Link } from "react-router-dom";

function Home() {
    let lyrics = [{
        text: "I see tree you see forest, I see rain you see growth",
        url: '/again'
        },
        {
        text: "I see new colours where darkness falls",
        url: '/youwillneverend',
        },
        {
        text: "I see new colours where darkness falls",
        url: '/youwillneverend',
        },
        {
        text: "I see new colours where darkness falls",
        url: '/youwillneverend',
        },
        {
        text: "What feels good isn't always right",
        url: '/heavenandearth',
        },
        {
        text: "What feels good isn't always right",
        url: '/heavenandearth',
        },
        {
        text: "You take it all, when my shame is burning",
        url: '/refuge',
        },
        {
        text: "You change my point of view",
        url: '/howcome',
        }
    ]

    function randomNumber(list) {
        return Math.floor((Math.random() * list.length));
    }
    const index = randomNumber(lyrics)
    const [lyric, setLyric] = useState(lyrics[index].text);
    const [url, setUrl] = useState(lyrics[index].url);

    
    return (
        <div className='home'>
            <Link to={url}>
                <div id="text">{lyric}</div>
            </Link>
        </div>
    )
}

export default Home







    