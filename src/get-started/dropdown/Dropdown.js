import React from 'react';
import DefaultOption from './DefaultDropdown';
import Option from './Option';
import './Dropdown.css';

export default (props) => {
    return(
        <span className='full-dropdown'>
            <div className='goal-name'>Goal</div>
            <select value={props.currVal} onChange={props.change}>
                <DefaultOption currVal={props.currVal}/>
                {
                    props.options.map((option) => (
                        <Option value={option}/>
                    ))
                }
            </select>
            <div className='error'>{props.error}</div>
        </span>
    );
}