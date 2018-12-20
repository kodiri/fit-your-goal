import React from 'react';
import './TextInput.css';

export default (props) => {
    return(
        <span className='input-label'>
            <div className='name-text'>{`${props.name[0].toUpperCase()}${props.name.substring(1)}`}</div>
            <label>
                <input type='text' name={props.name} value={props.value} onChange={props.textChangeEvent}/>
            </label>
            <div className='error'>{props.errorMessage}</div>
            <br/>
        </span>
    );
    
};