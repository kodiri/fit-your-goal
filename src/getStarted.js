import React from 'react';
import { Link } from 'react-router-dom';

export default function getStarted() {
    return (
        <div>
            <Link to= {'/'}>
                <div className='links'>
                    Home
                </div>
            </Link>
            <Link to= {'/results'}>
                <div className='links'>
                    Submit!
                </div>
            </Link>
        </div>
    );
}