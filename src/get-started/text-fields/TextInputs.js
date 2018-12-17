import React from 'react';
import TextInput from './TextInput';

export default (props) => {
    return(
        <span>
            {
                props.names.map((name, i) => (
                    <TextInput 
                        key = {i}
                        name={name}
                        value={props.fields[name]}
                        errorMessage = {props.errors[name]}
                        textChangeEvent = {props.textChangeEvent}
                    />
                ))
            }
            
        </span>
    );
}