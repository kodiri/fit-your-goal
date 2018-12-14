export function filterByAge(durations, age) {
    return age > 80 ?
        durations.filter(duration => (duration <= 20)) :
        age >= 60 ?
            durations.filter(duration => (duration <= 30)) :
            age >= 55 ?
                durations.filter(duration => (duration <= 40)) :
                age >= 50 ?
                    durations.filter(duration => (duration <= 50)) :
                    durations;
}