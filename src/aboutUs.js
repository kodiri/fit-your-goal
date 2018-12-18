import React from 'react';
import { Link } from 'react-router-dom';
import logocircle from './logocircle.png'

export default function aboutUs() {
    return (
        <div>
            <header className="App-header">
                <div className="container">
                    <div className="wrap-logo">
                        { <img src={logocircle} alt="logo"/> }
                    </div>
                    <ul className="ul">
                        <li>
                            <Link to={'/'}>
                                <div className='links'>Home</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/get-started'}>
                                <div className='links'>Get Started</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/aboutUs'}>
                                <div className='links'>About Us</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/aboutUs'}>
                                <div className='links'>Contact Us</div>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </header>
            <div className="body">
                <div className="wrap-content">
                    <div className="title">
                        <p>About Us</p>
                    </div>
                    <div className="wrap-boxes">
                        
                        
                    </div>
                        
                            <div className="title2">
                            <p>Free Work-out Programs Just for You</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                            <Link to={'/aboutUs'}>
                                <div className='links'>Team Alpha: Fit-Your-Goal</div>
                            </Link>
                            <Link to={'/aboutUs'}>
                                <div className='links'>Terms and Conditions</div>
                            </Link>

            </div>
        </div>
    );
}