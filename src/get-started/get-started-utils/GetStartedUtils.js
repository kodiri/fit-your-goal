
export function displayGoalDefaultOrNot(optionVal){
    //This makes sure that the user doesn't ignore the goals option
    if(optionVal === 'instruction'){
        return 'block';
    }
    return 'none';
}

export function kebabCaseToWords(words){
    return words.split('-')
        .map((word) => word[0].toUpperCase() +word.substring(1))
        .join(' ');
}

export function updateFields(prevVals, target){
    return Object.keys(prevVals).reduce((newValues, field) => {
        if(field === target.name){
            newValues[field] = target.value; 
        }
        else{
            newValues[field] = prevVals[field];
        }
        return newValues;
    }, {});
}

export function validateGoalsOptions(curr_err, goals_val){
    let isDefault = goals_val === 'instruction';
    curr_err.goal = (isDefault) ? 'Please select an option' : '';
    return curr_err;
}

export function everythingFilled(fieldsObj){
    let newErrorMessages = Object.keys(fieldsObj).reduce((newObj, field) => {
        let empty = !fieldsObj[field];
        newObj[field] = (empty) ? `Please fill in the ${field}` : '';
        return newObj;
    }, {});
    return newErrorMessages;
}

export function createEmptyFieldObj(valueArray){
    return valueArray
    .reduce((emptyValues, name) => {
        emptyValues[name] = '';
        return emptyValues;
    }, {});
}

//If there are no error messages then it returns true
export function checkIfEverythingIsGood(error_messages){
    return  Object.keys(error_messages).reduce((allGood, name) => {
        return allGood && error_messages[name] === '';
    }, true);
}