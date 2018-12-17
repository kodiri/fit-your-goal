import * as utils from './DropdownUtils';

describe(('string manipulation'), () => {
    describe('see if kebab case changes to words', () => {
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
                expect(utils.kebabCaseToWords(senario.kebab)).toBe(senario.sentenceAllCapitals);
            });
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
                let returnedValue = utils.displayGoalDefaultOrNot(senario.optionVal);
                expect(returnedValue).toBe(senario.expected);
            });
        });
    });
});