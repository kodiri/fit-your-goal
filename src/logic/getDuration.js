import { filterByAge } from './filterByAge';
import { filterByActivityLevel } from './filterByActivityLevel';

export function getDuration(age, activityLevel) {
    let durations = [10, 20, 30, 40, 50, 60];
    durations = filterByAge(durations, age);
    durations = filterByActivityLevel(durations, activityLevel);
    return durations;
};