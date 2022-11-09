import capitalize from "./capitalize";
test('return string with first letter captitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Return string with first letter captitalized ', () => {
  expect(capitalize('world')).toBe('World');
});

test('Return string with first letter captitalized ', () => {
  expect(capitalize('dancer')).toBe('Dancer');
});
