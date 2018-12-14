import { filterByAge } from './filterByAge';
import { filterByActivityLevel } from './filterByActivityLevel';

export function getDuration(age, activityLevel, durations) {
    durations = filterByAge(durations, age);
    durations = filterByActivityLevel(durations, activityLevel);
    return durations;
};