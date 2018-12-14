import { getDuration } from './getDuration'

describe('getDuration function', () => {
    [{
        it: 'returns all durations if age less than 50',
        age: 49,
        activityLevel: 7,
        toEqual: [10, 20, 30, 40, 50, 60]
    }, {
        it: 'returns durations up to 50 if age is 50-55',
        age: 50,
        activityLevel: 7,
        toEqual: [10, 20, 30, 40, 50]
    }, {
        it: 'returns durations up to 40 if age is 55-60',
        age: 55,
        activityLevel: 7,
        toEqual: [10, 20, 30, 40]
    }, {
        it: 'returns durations up to 30 if age is 60-80',
        age: 60,
        activityLevel: 7,
        toEqual: [10, 20, 30]
    }, {
        it: 'returns durations up to 20 if age is 80+',
        age: 81,
        activityLevel: 7,
        toEqual: [10, 20]
    }, {
        it: 'returns durations up to 30 if AL is 0',
        age: 49,
        activityLevel: 0,
        toEqual: [10, 20, 30]
    }, {
        it: 'returns durations up to 40 if AL is 1',
        age: 49,
        activityLevel: 1,
        toEqual: [10, 20, 30, 40]
    }, {
        it: 'returns durations up to 50 if AL is 2',
        age: 49,
        activityLevel: 2,
        toEqual: [10, 20, 30, 40, 50]
    }, {
        it: 'returns all durations if AL is 3-7 inclusive',
        age: 49,
        activityLevel: 3,
        toEqual: [10, 20, 30, 40, 50, 60]
    }, {
        it: 'filters durations on BOTH age and AL',
        age: 55,
        activityLevel: 0,
        toEqual: [10, 20, 30]
    }
    ].forEach(scenario => {
        it(scenario.it, () => {
            
            //given
            let durations = [10, 20, 30, 40, 50, 60];
    
            //when
            let age = scenario.age, activityLevel = scenario.activityLevel;
    
            //then
            expect(getDuration(age, activityLevel, durations))
                .toEqual(scenario.toEqual);
        });
    });
});