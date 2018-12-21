import React from 'react';
import * as utils from '../get-started-utils/DropdownUtils';

const option = (props) => {
    return(
        <option value={props.value} >
            {utils.kebabCaseToWords(props.value)}
        </option>
    );
};

export default option;