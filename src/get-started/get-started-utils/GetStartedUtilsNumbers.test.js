import * as utils from './GetStartedUtilsNumbers';

describe('check numbers', () => {
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
                expect(utils.checkIfFullNum(senario.num)).toEqual(senario.expected);
            });
        });
    });
});