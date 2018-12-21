import React from 'react';
import * as utils from '../get-started-utils/DropdownUtils';

const defaultDropdown = (props) => (
    <option style={{display: utils.displayGoalDefaultOrNot(props.currVal)}} value='instruction'>
        Choose your desired goal
    </option>
);

export default defaultDropdown;