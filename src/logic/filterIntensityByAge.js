export function filterIntensityByAge(intensities, age) {
    return age > 60 ?
        intensities.filter(intensity => (intensity === 'low')) :
        age >= 50 ?
            intensities.filter(intensity => (intensity === 'low' || intensity === 'medium')) :
            intensities;
}