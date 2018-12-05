import React from 'react';
import { Link } from 'react-router-dom';

export default function results() {
    return (
        <div>
            <Link to= {'/'}>
                <div className='links'>
                    Home
                </div>
            </Link>
            <Link to= {'/get-started'}>
                <div className='links'>
                    Back to get started!
                </div>
            </Link>
        </div>
    );
}