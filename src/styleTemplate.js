import React from 'react';
import { Link } from 'react-router-dom';
import hero from './hero.png';
import './App.css';

export default function home() {
    return (
        <div>
            <header className="App-header">
                <div className="container">
                    <div className="wrap-logo">
                        {/* <img src={} alt=""/> */}
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
                            <Link to={'/get-started'}>
                                <div className='links'>Item 3</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/get-started'}>
                                <div className='links'>Item 4</div>
                            </Link
                            ></li>
                    </ul>
                </div>
            </header>
            <div className="body">
                <div className="wrap-content">
                    <div className="title">
                        <p>Just some text describing the app</p>
                    </div>
                    <div className="wrap-boxes">
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>

    );
}