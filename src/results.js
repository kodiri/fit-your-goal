import React from 'react';
import { Link } from 'react-router-dom';
import { getSports } from './logic/getSports'
import { getDuration } from './logic/getDuration'
import { getFrequency } from './logic/getFrequency'
import { getIntensity } from './logic/getIntensity'
import './results.css';

export default function results(props) {
    return (
        <div className='results-info'>
            <h1>Your personal fitness program!</h1>
            <h2>Try these activities: {getSports(Number(props.history.location.state.age), Number(props.history.location.state.weight),(props.history.location.state.goals)).join(', ')}</h2>
            <h2>Train between {getDuration(Number(props.history.location.state.age), Number(props.history.location.state.activity))[0]} and {getDuration(Number(props.history.location.state.age), Number(props.history.location.state.activity)).slice(-1)} minutes!</h2>
            <h2>Train up to {getFrequency(Number(props.history.location.state.age), Number(props.history.location.state.activity)).slice(-1)} time/s per week!</h2>
            <h2>Session intensity: {getIntensity(Number(props.history.location.state.age), Number(props.history.location.state.activity)).join(', ')}</h2>
            <Link to= {'/get-started'}>
                <div className='links'>
                    Back to get started!
                </div>
            </Link>
        </div>
    );
}