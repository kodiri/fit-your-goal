import { filterFreqByAge } from "./filterFreqByAge";
import { filterFreqByActivityLevel } from "./filterFreqByActivityLevel";

export function getFrequency(age, activityLevel, frequencies) {
    frequencies = filterFreqByAge(frequencies, age);
    frequencies = filterFreqByActivityLevel(frequencies, activityLevel);
    return frequencies;
};