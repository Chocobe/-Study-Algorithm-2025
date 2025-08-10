import { anagram } from './02-anagram-myself';

describe('03-01 빈도수 세기 / 02-anagram.js', () => {
  it ('anagram("apple", "papel) === true', () => {
    const result = anagram(
      'apple',
      'papel'
    );

    expect(result).toBe(true);
  });

  it ('anagram("aaz", "azz") === false', () => {
    const result = anagram(
      'aaz',
      'azz'
    );

    expect(result).toBe(false);
  });

  it ('anagram("anagram", "nagaram") === true', () => {
    const result = anagram(
      'anagram',
      'nagaram'
    );

    expect(result).toBe(true);
  });

  it ('anagram("awesome", "awesom") === false', () => {
    const result = anagram(
      'awesome',
      'awsomm'
    );

    expect(result).toBe(false);
  });

  it ('anagram("qwerty", "qeywrt") === true', () => {
    const result = anagram(
      'qwerty',
      'qeywrt'
    );

    expect(result).toBe(true);
  });

  it ('anagram("texttwisttime", "timetwisttext") === true', () => {
    const result = anagram(
      'texttwisttime',
      'timetwisttext'
    );

    expect(result).toBe(true);
  });
});
