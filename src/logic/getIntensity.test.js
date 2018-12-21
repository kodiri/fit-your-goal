import { getIntensity } from './getIntensity'

describe('getIntensity function', () => {
    [{
        it: 'returns all intensities if age less than 50',
        age: 49,
        activityLevel: 7,
        toEqual: ['low', 'medium', 'high']
    }, {
        it: 'returns low and medium intensities if age is 50-60 inclusive',
        age: 50,
        activityLevel: 7,
        toEqual: ['low', 'medium']
    }, {
        it: 'returns low intensity ONLY if age is over 60',
        age: 61,
        activityLevel: 7,
        toEqual: ['low']
    }, {
        it: 'returns low intensity ONLY if AL is 0',
        age: 39,
        activityLevel: 0,
        toEqual: ['low']
    }, {
        it: 'returns low and medium intensities if AL is 1',
        age: 39,
        activityLevel: 1,
        toEqual: ['low', 'medium']
    }, {
        it: 'returns all intensities if AL is 2-7 inclusive',
        age: 39,
        activityLevel: 2,
        toEqual: ['low', 'medium', 'high']
    }, {
        it: 'filters intensities on BOTH age and AL',
        age: 50,
        activityLevel: 0,
        toEqual: ['low']
    }
    ].forEach(scenario => {
        it(scenario.it, () => {
            
            //given
            let intensities = ['low', 'medium', 'high'];
    
            //when
            let age = scenario.age, activityLevel = scenario.activityLevel;
    
            //then
            expect(getIntensity(age, activityLevel, intensities))
                .toEqual(scenario.toEqual);
        });
    });
});