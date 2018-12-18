import * as start from './GetStartedUtils';
import * as testFunc from './TestFunctions';

describe('text validation', () => {
    describe('see if any field is empty and return error message accordingly', () => {
        [
            {
                it: 'check if error messages are correct',
                field_values: ['', '', '', '4'],
                expectedMessagesArgs: [
                    ['age', true], ['weight', true], ['height', true], ['activity', false]
                ]
            },
            {
                it: 'check if error messages are correct',
                field_values: ['20', '80', '177', '4'],
                expectedMessagesArgs: [
                    ['age', false], ['weight', false], ['height', false], ['activity', false]
                ]
            },
            {
                it: 'check if error messages are correct',
                field_values: ['20', '80', '', '4'],
                expectedMessagesArgs: [
                    ['age', false], ['weight', false], ['height', true], ['activity', false]
                ]
            },
            {
                it: 'check if error messages are correct',
                field_values: ['', '', '', ''],
                expectedMessagesArgs: [
                    ['age', true], ['weight', true], ['height', true], ['activity', true]
                ]
            }
        ].forEach((senario, i) => {
            it(`${senario.it} #${i + 1}`, () => {
                let sampleFields = testFunc.createSampleFields(...senario.field_values);
                let expectedMessages = testFunc.createEmptyErrorMessage(...senario.expectedMessagesArgs);
                expect(start.everythingFilled(sampleFields)).toEqual(expectedMessages);
            });
        });
    });
    
    describe(('validate goals options'), () => {
        let errorMessage = testFunc.createEmptyErrorMessage(
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
                let expWGoals = testFunc.addGoalsToErrorMessage(errorMessage, senario.errMessage);
                expect(start.validateGoalsOptions(errorMessage, senario.option_val)).toEqual(expWGoals); 
            });
        });
    });
});

describe('see of the object is expected', () => {
    it('the function must return empty values', () => {
        let empty = start.createEmptyFieldObj(['age','weight','height','activity']);
        let expected = {
            age: '',
            weight: '',
            height: '',
            activity: ''
        }
        expect(expected).toEqual(empty);
    });
});

describe('Are the values in the field updated properly', () => {
    [
        {
            it: 'Update fields',
            oldVals: ['28', '80', '178', ''],
            target: ['weight', '130'],
            expectedVals: ['28', '130', '178', ''],
        },
        {
            it: 'Update fields',
            oldVals: ['43', '98', '', '4'],
            target: ['height', '200'],
            expectedVals: ['43', '98', '200', '4'],
        },
        {
            it: 'Update fields',
            oldVals: ['', '98', '', '4'],
            target: ['activity', '1'],
            expectedVals: ['', '98', '', '1'],
        }
    ].forEach((senario, i) => {
        it(`${senario.it} #${i + 1}`, () => {
            let oldVals = testFunc.createSampleFields(...senario.oldVals);
            let changedField = testFunc.createTargetObj(...senario.target);
            let newValues = start.updateFields(oldVals, changedField);
            let expectedVals =testFunc.createSampleFields(...senario.expectedVals);
            expect(newValues).toEqual(expectedVals);
        });
    });
});

describe('Check if all fields are ok, by checking if there are no pending error messages', () => {
    [
        {
            it: 'Ready to go to next page',
            errWithoutGoals: [
                ['age', false], ['weight', false], ['height', false], ['activity', false]
            ],
            goalErr: 'Please select an option',
            expected: false
        },
        {
            it: 'Ready to go to next page',
            errWithoutGoals: [
                ['age', false], ['weight', false], ['height', false], ['activity', false]
            ],
            goalErr: '',
            expected: true
        },
        {
            it: 'Ready to go to next page',
            errWithoutGoals: [
                ['age', false], ['weight', true], ['height', false], ['activity', false]
            ],
            goalErr: '',
            expected: false
        },
        {
            it: 'Ready to go to next page',
            errWithoutGoals: [
                ['age', false], ['weight', true], ['height', true], ['activity', false]
            ],
            goalErr: 'Please select an option',
            expected: false
        }
    ].forEach((senario, i) => {
        it(`${senario.it} #${i + 1}`, () => {
            let errorWithoutGoals = testFunc.createEmptyErrorMessage(...senario.errWithoutGoals);
            let errorWithGoals = testFunc.addGoalsToErrorMessage(errorWithoutGoals, senario.goalErr);
            let result = start.checkIfEverythingIsGood(errorWithGoals);
            expect(result).toBe(senario.expected);
        });
    });
});

describe('displays something depending on a condition', () => {
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

// function createSampleFields(age, weight, height, activity){
//     return {
//         age: age,
//         weight: weight,
//         height: height,
//         activity: activity
//     }
// }

// function createEmptyErrorMessage(...fields){
//     return fields.reduce((acc, field) => {
//         acc[field[0]] = field[1] ?
//         `Please fill in the ${field[0]}` :
//         '';
//         return acc;
//     }, {});
// }

// function addGoalsToErrorMessage(currErr, goalErrMessage){
//     let newArr = Object.keys(currErr).reduce((acc, field) => {
//         acc[field] = currErr[field];
//         return acc;
//     }, {});
//     newArr.goal = goalErrMessage;
//     return newArr;
// }

// //tartget is actually in XML but seems to work like objects (I don't know why)
// function createTargetObj(name, value){
//     return {
//         name: name,
//         value: value
//     }
// }