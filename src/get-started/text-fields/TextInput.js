import React from 'react';
import './TextInput.css';

const textInput = (props) => {
    return(
        <span className='input-label'>
            <div className='name-text'>
                {
                    getName(props.name, props.info)
                }
            </div>
            <label>
                <input type='text' name={props.name} value={props.value} onChange={props.textChangeEvent}/>
            </label>
            <div className='error'>{props.errorMessage}</div>
            <br/>
        </span>
    );
    
    function getName(name, info) {
        let nameCaps = name[0].toUpperCase() + name.substring(1);
        return `${nameCaps} (${info})`;
    }
};

export default textInput;