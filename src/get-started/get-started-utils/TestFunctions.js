export function createSampleFields(age, weight, height, activity){
    return {
        age: age,
        weight: weight,
        height: height,
        activity: activity
    }
}

export function createEmptyErrorMessage(...fields){
    return fields.reduce((acc, field) => {
        acc[field[0]] = field[1] ?
        `Please fill in the ${field[0]}` :
        '';
        return acc;
    }, {});
}

export function addGoalsToErrorMessage(currErr, goalErrMessage){
    let newArr = Object.keys(currErr).reduce((acc, field) => {
        acc[field] = currErr[field];
        return acc;
    }, {});
    newArr.goal = goalErrMessage;
    return newArr;
}

//tartget is actually in XML but seems to work like objects (I don't know why)
export function createTargetObj(name, value){
    return {
        name: name,
        value: value
    }
}