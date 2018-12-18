//check if the age, height and weight are numbers
//this is only for testing and will not be integrated until the goals is done
export function checkIfContinousFieldsAreNumbers(emptyOrNot){
    let newErrorMessages = this.allnames.reduce((acc, name) => {
        let goalsField = name === 'goals';
        if(!emptyOrNot[name] &&
                !goalsField
            )
        {
            //there is some data in this field
            let isNum = this.checkIfFullNum(this.state.fields[name]);
            acc[name] = (!isNum) ? `${name[0].toUpperCase()}${name.substring(1)} must be a number!` : '';
        }
        else if(!goalsField){
            acc[name] = emptyOrNot[name]; //if empty keep the original error
        }
        return acc;
    }, {});

    return newErrorMessages;
}

//doesn't check for decimal places which might be required for height and/or weight 
export function checkIfFullNum(field, fieldName){
    return !field
        .split('')
        .find((char) => !'1234567890'.includes(char));
}