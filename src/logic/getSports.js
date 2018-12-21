export function getSports(age, weight, goals) {
    let sports = ['run', 'bike', 'swim', 'row', 'walk', 'yoga', 'weights']
    sports = filterByAge(sports, age);
    sports = filterByWeight(sports, weight);
    sports = filterByGoals(sports, goals);
    return sports;
}

function filterByAge(sports, age) {
    return age > 60 ?
        sports.filter(function (sport) {
            return sport !== 'weights' &&
                sport !== 'run' &&
                sport !== 'row';
        }) :
        sports;
}

function filterByWeight(sports, weight) {
    return weight > 100 ?
        sports.filter(function (sport) {
            return sport !== 'run';
        }) :
        sports;
}

function filterByGoals(sports, goals) {
    return goals === 'lose-weight' ?
        sports.filter(function (sport) {
            return sport !== 'weights';
        }) :
        sports.filter(function(sport){
            return sport === 'weights';
        });
}
