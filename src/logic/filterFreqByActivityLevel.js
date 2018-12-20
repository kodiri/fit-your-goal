export function filterFreqByActivityLevel(frequencies, activityLevel) {
    return activityLevel === 0 ?
        frequencies.filter(frequency => (frequency <= 2)) :
        activityLevel === 1 ?
            frequencies.filter(frequency => (frequency <= 3)) :
            activityLevel === 2 ?
                frequencies.filter(frequency => (frequency <= 5)) :
                frequencies;
};