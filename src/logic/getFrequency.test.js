import { getFrequency } from './getFrequency'

describe('getFrequency function', () => {
    [{
        it: 'returns all frequencies if age less than 40',
        age: 39,
        activityLevel: 7,
        toEqual: [1, 2, 3, 4, 5, 6, 7]
    }, {
        it: 'returns frequencies <= 6 if age is 40-45 inclusive',
        age: 44,
        activityLevel: 7,
        toEqual: [1, 2, 3, 4, 5, 6]
    }, {
        it: 'returns frequencies <= 5 if age is 46-50 inclusive',
        age: 50,
        activityLevel: 7,
        toEqual: [1, 2, 3, 4, 5]
    }, {
        it: 'returns frequencies <= 4 if age is 51-55 inclusive',
        age: 55,
        activityLevel: 7,
        toEqual: [1, 2, 3, 4]
    }, {
        it: 'returns frequencies <= 3 if age is 56-60 inclusive',
        age: 60,
        activityLevel: 7,
        toEqual: [1, 2, 3]
    }, {
        it: 'returns frequencies <= 2 if age is over 60',
        age: 61,
        activityLevel: 7,
        toEqual: [1, 2]
    }, {
        it: 'returns frequencies up to 2 if AL is 0',
        age: 39,
        activityLevel: 0,
        toEqual: [1, 2]
    }, {
        it: 'returns frequencies up to 3 if AL is 1',
        age: 39,
        activityLevel: 1,
        toEqual: [1, 2, 3]
    }, {
        it: 'returns frequencies up to 5 if AL is 2',
        age: 39,
        activityLevel: 2,
        toEqual: [1, 2, 3, 4, 5]
    }, {
        it: 'returns ALL frequencies if AL is at least 3',
        age: 39,
        activityLevel: 3,
        toEqual: [1, 2, 3, 4, 5, 6, 7]
    }, {
        it: 'filters frequencies on BOTH age and AL',
        age: 50,
        activityLevel: 1,
        toEqual: [1, 2, 3]
    }
    ].forEach(scenario => {
        it(scenario.it, () => {
            
            //given
            let frequencies = [1, 2, 3, 4, 5, 6, 7];
    
            //when
            let age = scenario.age, activityLevel = scenario.activityLevel;
    
            //then
            expect(getFrequency(age, activityLevel, frequencies))
                .toEqual(scenario.toEqual);
        });
    });
});