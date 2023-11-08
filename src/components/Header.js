import React from 'react';
import trollface from '../assets/images/troll-face.png';


export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollface} 
                className="header--image"
                alt="troll"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Funny Memes Only</h4>
        </header>
    )
}