import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('class')).toBe('class');
    });
    test('with additional params', () => {
        const expectedResult = 'class class1 class2';
        expect(classNames('class', {}, ['class1', 'class2'])).toBe(expectedResult);
    });
    test('with mods params', () => {
        const expectedResult = 'class class3 class5 class1 class2';
        expect(
            classNames(
                'class',
                {
                    class3: true,
                    class4: false,
                    class5: 'as',
                    class6: undefined
                },
                ['class1', 'class2']
            )
        ).toBe(expectedResult);
    });
});
