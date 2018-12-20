import { filterFreqByAge } from "./filterFreqByAge";
import { filterFreqByActivityLevel } from "./filterFreqByActivityLevel";

export function getFrequency(age, activityLevel) {
    let frequencies = [1, 2, 3, 4, 5, 6, 7];
    frequencies = filterFreqByAge(frequencies, age);
    frequencies = filterFreqByActivityLevel(frequencies, activityLevel);
    return frequencies;
};