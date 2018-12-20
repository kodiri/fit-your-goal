import { filterIntensityByAge } from "./filterIntensityByAge";
import { filterIntensityByActivityLevel } from "./filterIntensityByActivityLevel";

export function getIntensity(age, activityLevel) {
    let intensities = ['low', 'medium', 'high'];
    intensities = filterIntensityByAge(intensities, age);
    intensities = filterIntensityByActivityLevel(intensities, activityLevel);
    return intensities;
};