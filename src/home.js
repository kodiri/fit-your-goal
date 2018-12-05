import React from 'react';
import { Link } from "react-router-dom";
import hero from './hero.png';

export default function home() {
    return (
        <div>
            <header className="App-header">
                <Link to= {"/"}>
                    <div className='links'>
                        Home
                    </div>
                </Link>
                <Link to= {"/get-started"}>
                    <div className='links'>
                        Get Started
                    </div>
                </Link>
            <img src={hero} className="App-logo" alt="logo" />
            <p>
                <h1>Start your fitness journey now!</h1>
            </p>
            </header>
        </div>
    );
}