import reverseString from './reverseString';

test('return the string reversed', () => {
  expect(reverseString('cat')).toBe('tac');
});

test('return the string reversed', () => {
  expect(reverseString('dog')).toBe('god');
});
