import React from 'react';
import * as utils from '../get-started-utils/DropdownUtils';

export default (props) => {
    return(
        <option value={props.value} >
            {utils.kebabCaseToWords(props.value)}
        </option>
    );
};