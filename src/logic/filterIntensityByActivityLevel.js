export function filterIntensityByActivityLevel(intensities, activityLevel) {
    return activityLevel === 0 ?
        intensities.filter(intensity => (intensity === 'low')) :
        activityLevel === 1 ?
            intensities.filter(intensity => (
                intensity === 'low' ||
                intensity === 'medium'
            )) : intensities;
};