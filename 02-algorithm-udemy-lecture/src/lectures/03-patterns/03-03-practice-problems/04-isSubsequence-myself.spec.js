import { isSubsequence } from './04-isSubsequence-myself';

describe('03-03 / 04-isSubsequence', () => {
  it ('isSubsequence("hello", "hello world"', () => {
    const result = isSubsequence('hello', 'hello world');

    expect(result).toBe(true);
  });

  it ('isSubsequence("sing", "sting") === true', () => {
    const result = isSubsequence('sing', 'sting');

    expect(result).toBe(true);
  });

  it ('isSubsequence("abc", "abracadabra") === true', () => {
    const result = isSubsequence('abc', 'abracadabra');

    expect(result).toBe(true);
  });

  it ('isSubsequence("abc", "acb") === false', () => {
    const result = isSubsequence('abc', 'acb');

    expect(result).toBe(false);
  });
});
