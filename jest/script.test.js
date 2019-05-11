const script = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(script.sum(1, 2)).toBe(3);
  expect(script.x).toBe(10);
});