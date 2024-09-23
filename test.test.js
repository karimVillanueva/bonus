/* eslint-disable */
const ulcase = require('./index') // Adjust the path as necessary

describe('ulcase function', () => {
  test('should convert all characters before a dot to uppercase', () => {
    expect(ulcase('hello.world')).toBe('HELLO.world');
  });

  test('should convert all characters to uppercase if no dot exists', () => {
    expect(ulcase('teststring')).toBe('TESTSTRING');
  });

  test('should handle empty string', () => {
    expect(ulcase('')).toBe('');
  });

  test('should convert characters correctly with multiple dots', () => {
    expect(ulcase('a.b.c.d')).toBe('A.b.c.d');
  });

  test('should convert characters correctly with no letters before a dot', () => {
    expect(ulcase('.hello')).toBe('.hello');
  });

  test('should handle strings with special characters', () => {
    expect(ulcase('test!@#.world')).toBe('TEST!@#.world');
  });
});
