export function filterFreqByActivityLevel(frequencies, activityLevel) {
    return activityLevel === 0 ?
        frequencies.filter(function (frequency) { return frequency <= 2 }) :
        activityLevel === 1 ?
            frequencies.filter(function (frequency) { return frequency <= 3 }) :
            activityLevel === 2 ?
                frequencies.filter(function (frequency) { return frequency <= 5 }) :
                frequencies;
};