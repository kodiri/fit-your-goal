function getSports(age, weight, goals) {
    let sports = ['run', 'bike', 'swim', 'row', 'walk', 'yoga', 'weights']
    if (age > 60) {
        sports = sports.filter(function (sport) {
            return sport !== 'weights' &&
                sport !== 'run' &&
                sport !== 'row';
        })
    }
    if (weight > 100) {
        sports = sports.filter(function (sport) {
            return sport !== 'run';
        })
    }
    if (goals === 'Lose Weight') {
        sports = sports.filter(function (sport) {
            return sport !== 'weights';
        })
    }
    return sports;
}
//example calling function for user with: age 65, weight 101kg, goal 'Lose Weight'
getSports(65, 101, 'Lose Weight') //expected output: ["bike", "swim", "walk", "yoga"]
