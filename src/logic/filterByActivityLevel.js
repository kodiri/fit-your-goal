export function filterByActivityLevel(durations, activityLevel) {
    return activityLevel === 0 ?
            durations.filter(function (duration) { return duration <= 30 }) :
            activityLevel === 1 ?
                durations.filter(function (duration) { return duration <= 40 }) :
                activityLevel === 2 ?
                    durations.filter(function (duration) { return duration <= 50 }) :
                    durations;
}