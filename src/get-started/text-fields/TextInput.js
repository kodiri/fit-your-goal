import React from 'react';

export default (props) => (
    <label style={{display: 'block'}}>
        {`${props.name[0].toUpperCase()}${props.name.substring(1)}`}
        <input type='text' name={props.name} value={props.value} onChange={props.textChangeEvent} />
        <div style={{display: 'inline-block', color: 'red'}}>{props.errorMessage}</div>
    </label>
);