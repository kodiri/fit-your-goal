export function filterFreqByAge(frequencies, age) {
    return age > 60 ?
        frequencies.filter(frequency => (frequency <= 2)) :
        age >= 56 ?
            frequencies.filter(frequency => (frequency <= 3)) :
            age >= 51 ?
                frequencies.filter(frequency => (frequency <= 4)) :
                age >= 46 ?
                    frequencies.filter(frequency => (frequency <= 5)) :
                    age >= 40 ?
                        frequencies.filter(frequency => (frequency <= 6)) :
                        frequencies;
}