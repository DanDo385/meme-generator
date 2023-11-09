import React from 'react';
import trollface from '../assets/images/troll-face.png';
import '../style.css';

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollface} 
                className="header--image"
                alt="troll"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Funny Memes Only Please</h4>
        </header>
    )
}
