import React from 'react';
import TextInput from './TextInput';

const textInputs = (props) => {
    let info = ['Years', 'kg', 'cm', 'session / week', ''];
    return(
        <span>
            {
                props.names.map((name, i) => (
                    <TextInput 
                        key = {i}
                        info = {info[i]}
                        name = {name}
                        value = {props.fields[name]}
                        errorMessage = {props.errors[name]}
                        textChangeEvent = {props.textChangeEvent}
                    />
                ))
            }
        </span>
    );
};

export default textInputs;