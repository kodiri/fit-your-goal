import GetStartedPage from './getStarted';
import * as getStarted from './getStarted';

//Initially created the functions before creating this file
//so in this case, it isn't really TDD but I think this is better than nothing

describe('validation', () => {
    let start = new GetStartedPage();
    describe('see of the object is expected', () => {
        it('see if the function returns empty values', () => {
            let empty = start.createEmptyFieldObj();
            let expected = {
                age: '',
                weight: '',
                height: '',
                activity: ''
            }
            expect(expected).toEqual(empty);
        });
    });

    describe('see if any field is empty and return error message accordingly', () => {
            [
                {
                    it: 'check if error messages are correct',
                    field_values: createSampleFields(
                        '', '', '', '4'
                    ),
                    expectedMessages: createEmptyErrorMessage(
                        ['age', true],
                        ['weight', true],
                        ['height', true],
                        ['activity', false]
                    ),
                },
                {
                    it: 'check if error messages are correct',
                    field_values: createSampleFields(
                        '20', '80', '177', '4'
                    ),
                    expectedMessages: createEmptyErrorMessage(
                        ['age', false],
                        ['weight', false],
                        ['height', false],
                        ['activity', false]
                    )
                },
                {
                    it: 'check if error messages are correct',
                    field_values: createSampleFields(
                        '20', '80', '', '4'
                    ),
                    expectedMessages: createEmptyErrorMessage(
                        ['age', false],
                        ['weight', false],
                        ['height', true],
                        ['activity', false]
                    )
                },
                {
                    it: 'check if error messages are correct',
                    field_values: createSampleFields(
                        '', '', '', ''
                    ),
                    expectedMessages: createEmptyErrorMessage(
                        ['age', true],
                        ['weight', true],
                        ['height', true],
                        ['activity', true]
                    )
                }
            ].forEach((senario, i) => {
                it(`${senario.it} #${i + 1}`, () => {
                    expect(start.everythingFilled(senario.field_values)).toEqual(senario.expectedMessages);
                });
            });
    });

    describe(('validate goals options'), () => {
        let errorMessage = createEmptyErrorMessage(
            ['age', true],
            ['weight', true],
            ['height', true],
            ['activity', false]
        );

        [
            {
                it: 'see if the goals value is still at default',
                option_val: 'instruction',
                errMessage: 'Please select an option'  
            },
            {
                it: 'see if the goals value is still at default',
                option_val: 'instruction',
                errMessage: 'Please select an option'  
            }
        ].forEach((senario, i) => {
            it(`${senario.it} #${i + 1}`, () => {
                let expWGoals = addGoalsToErrorMessage(errorMessage, senario.errMessage);
                expect(start.validateGoalsOptions(errorMessage, senario.option_val)).toEqual(expWGoals); 
            });
        });
    });
});

describe(('string manipulation'), () => {
    describe('see if kebab case changes to words', () => {
        let start = new GetStartedPage();
        [
            {
                it: 'kebab to sentence',
                kebab: 'this-is-a-sentence',
                sentenceAllCapitals: 'This Is A Sentence'
            },
            {
                it: 'kebab to sentence',
                kebab: 'word',
                sentenceAllCapitals: 'Word'
            }
        ].forEach((senario, i) => {
            it(`${senario.it} #${i + 1}`, () => {
                expect(start.kebabCaseToWords(senario.kebab)).toEqual(senario.sentenceAllCapitals);
            });
        });
    });
});

describe('Are the values in the field updated properly', () => {
    let start = new GetStartedPage();
    [
        {
            it: 'Update fields',
            oldVals: createSampleFields('28', '80', '178', ''),
            target: createTargetObj('weight', '130'),
            expectedVals: createSampleFields('28', '130', '178', ''),
        },
        {
            it: 'Update fields',
            oldVals: createSampleFields('43', '98', '', '4'),
            target: createTargetObj('height', '200'),
            expectedVals: createSampleFields('43', '98', '200', '4'),
        },
        {
            it: 'Update fields',
            oldVals: createSampleFields('', '98', '', '4'),
            target: createTargetObj('activity', '1'),
            expectedVals: createSampleFields('', '98', '', '1'),
        }
    ].forEach((senario, i) => {
        it(`${senario.it} #${i + 1}`, () => {
            let newValues = start.updateFields(senario.oldVals, senario.target);
            expect(newValues).toEqual(senario.expectedVals);
        });
    });
});

describe('check numbers', () => {
    let start = new GetStartedPage();
    describe('check full numbers', () => {
        [
            {
                num: '3287',
                expected: true
            },
            {
                num: '32r87',
                expected: false
            },
            {
                num: 'hsdjd3kjds',
                expected: false
            },
            {
                num: '82nj29cn2',
                expected: false
            }
        ].forEach((senario, i) => {
            it(`Test ${i + 1}`, () => {
                expect(start.checkIfFullNum(senario.num)).toEqual(senario.expected);
            });
        });
    });
});

describe('Check if all fields are ok, by checking if there are no pending error messages', () => {
    let start = new GetStartedPage();
    [
        {
            it: 'Ready to go to next page',
            errMessages: addGoalsToErrorMessage(
                    createEmptyErrorMessage(
                        ['age', false],
                        ['weight', false],
                        ['height', false],
                        ['activity', false]
                    ), 
                    'Please select an option'
                ),
            expected: false
        },
        {
            it: 'Ready to go to next page',
            errMessages: addGoalsToErrorMessage(
                    createEmptyErrorMessage(
                        ['age', false],
                        ['weight', false],
                        ['height', false],
                        ['activity', false]
                    ), 
                    ''
                ),
            expected: true
        },
        {
            it: 'Ready to go to next page',
            errMessages: addGoalsToErrorMessage(
                    createEmptyErrorMessage(
                        ['age', false],
                        ['weight', true],
                        ['height', false],
                        ['activity', false]
                    ), 
                    ''
                ),
            expected: false
        },
        {
            it: 'Ready to go to next page',
            errMessages: addGoalsToErrorMessage(
                    createEmptyErrorMessage(
                        ['age', false],
                        ['weight', true],
                        ['height', true],
                        ['activity', false]
                    ), 
                    'Please select an option'
                ),
            expected: false
        }
    ].forEach((senario, i) => {
        it(`${senario.it} #${i + 1}`, () => {
            expect(start.checkIfEverythingIsGood(senario.errMessages)).toEqual(senario.expected);
        });
    });
});

describe('displays something depending on a condition', () => {
    let start = new GetStartedPage();
    describe('Displays default select option (or not) which is the instruction', () => {
        [
            {
                it: 'displays it / sets display to block',
                optionVal: 'instruction',
                expected: 'block'
            },
            {
                it: 'does not display it / sets display to hidden #1',
                optionVal: 'fitness',
                expected: 'none'
            },
            {
                it: 'does not display it / sets display to hidden #1',
                optionVal: 'lose-weight',
                expected: 'none'
            }
        ].forEach((senario) => {
            it(senario.it, () => {
                let returnedValue = start.displayGoalDefaultOrNot(senario.optionVal);
                expect(returnedValue).toEqual(senario.expected);
            });
        });
    });
});

/*
 * Functions that will support the tests 
*/

function createSampleFields(age, weight, height, activity){
    return {
        age: age,
        weight: weight,
        height: height,
        activity: activity
    }
}

function createEmptyErrorMessage(...fields){
    return fields.reduce((acc, field) => {
        acc[field[0]] = field[1] ?
        `Please fill in the ${field[0]}` :
        '';
        return acc;
    }, {});
}

function addGoalsToErrorMessage(currErr, goalErrMessage){
    let newArr = Object.keys(currErr).reduce((acc, field) => {
        acc[field] = currErr[field];
        return acc;
    }, {});
    newArr.goal = goalErrMessage;
    return newArr;
}

//tartget is actually in XML but seems to work like objects (I don't know why)
function createTargetObj(name, value){
    return {
        name: name,
        value: value
    }
}