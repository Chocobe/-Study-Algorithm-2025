import { anagramLecture } from './03-anagram-lecture';

describe('03-01 빈도수 세기 / 03-anagram-lecture.js', () => {
  it ('anagram("apple", "papel) === true', () => {
    const result = anagramLecture(
      'apple',
      'papel'
    );

    expect(result).toBe(true);
  });

  it ('anagram("aaz", "azz") === false', () => {
    const result = anagramLecture(
      'aaz',
      'azz'
    );

    expect(result).toBe(false);
  });

  it ('anagram("anagram", "nagaram") === true', () => {
    const result = anagramLecture(
      'anagram',
      'nagaram'
    );

    expect(result).toBe(true);
  });

  it ('anagram("awesome", "awesom") === false', () => {
    const result = anagramLecture(
      'awesome',
      'awsomm'
    );

    expect(result).toBe(false);
  });

  it ('anagram("qwerty", "qeywrt") === true', () => {
    const result = anagramLecture(
      'qwerty',
      'qeywrt'
    );

    expect(result).toBe(true);
  });

  it ('anagram("texttwisttime", "timetwisttext") === true', () => {
    const result = anagramLecture(
      'texttwisttime',
      'timetwisttext'
    );

    expect(result).toBe(true);
  });
});
