import React from 'react';
import './TextInput.css';

export default (props) => {
    return(
        <span className='input-label'>
            <label>
                <div className='name-text'>{`${props.name[0].toUpperCase()}${props.name.substring(1)}`}</div>
                <input type='text' name={props.name} value={props.value} onChange={props.textChangeEvent}/>
                <div className='error'>{props.errorMessage}</div>
            </label>
            <br/>
        </span>
    );
    
};