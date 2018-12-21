import React from 'react';
import { Link } from 'react-router-dom';
import hero from './hero.png';

export default function home() {
    return (
        <div className='home'>
            <div>
                <h1>Start your fitness journey now!</h1>
            </div>
            <img src={hero} className='App-logo' alt='logo' />
            <Link className='wholeButton' to= {'/get-started'}>
            <h1 className='getStartedButton'>
                        <div className='links'>
                            Get Started
                        </div>
            </h1>
            </Link>
        </div>
    );
}