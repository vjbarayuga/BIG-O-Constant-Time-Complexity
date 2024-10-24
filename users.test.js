
const { getUserByID } = require('./users');

test('retrieve user by index', () => {
  expect(getUserByID(["Alice", "Bob", "Charlie", "Diane", "Eve"], 2)).toBe("Charlie");
});