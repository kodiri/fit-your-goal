import React from 'react';
import * as utils from '../get-started-utils/DropdownUtils';

export default (props) => (
    <option style={{display: utils.displayGoalDefaultOrNot(props.currVal)}} value='instruction'>
        Choose your desired goal
    </option>
);