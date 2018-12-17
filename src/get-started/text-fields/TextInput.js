import React from 'react';
import './TextInput.css';

export default (props) => {
    return(
        <span className='input-label'>
            <label style={{display: 'block'}}>
                <div>{`${props.name[0].toUpperCase()}${props.name.substring(1)}`}</div>
                <div><input type='text' name={props.name} value={props.value} onChange={props.textChangeEvent}/></div>
                <div  className='error'>{props.errorMessage}</div>
            </label>
            <br/>
        </span>
        // style={{display: 'inline-block', color: 'red'}}
    );
    
};