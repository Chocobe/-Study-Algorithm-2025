import { findLongestSubstring } from './07-findLongestSubstring-lecture';

describe('03-03 / 07-findLongestSubstring-myself', () => {
  it ('findLongestSubstring("") === 0', () => {
    const result = findLongestSubstring('');

    expect(result).toBe(0);
  });

  it ('findLongestSubstring("rithmschool") === 7', () => {
    const result = findLongestSubstring('rithmschool');

    expect(result).toBe(7);
  });

  it ('findLongestSubstring("thisisawesome") === 6', () => {
    const result = findLongestSubstring("thisisawesome");

    expect(result).toBe(6);
  });

  it ('findLongestSubstring("thecatinthehat") === 7', () => {
    const result = findLongestSubstring('thecatinthehat');

    expect(result).toBe(7);
  });

  it ('findLongestSubstring("bbbbbb") === 1', () => {
    const result = findLongestSubstring('bbbbbb');

    expect(result).toBe(1);
  });

  it ('findLongestSubstring("longestsubstring") === 8', () => {
    const result = findLongestSubstring('longestsubstring');

    expect(result).toBe(8);
  });

  it ('findLongestSubstring("thisishowwedoit")', () => {
    const result = findLongestSubstring('thisishowwedoit');

    expect(result).toBe(6);
  });
});
