import { naiveStringSearch } from './01-naive-string-search-myself';

describe('05-03 / 01-naive-string-search-myself', () => {
  it ('naiveStringSearch("Hello", "llo") === 1', () => {
    const result = naiveStringSearch('Hello', 'llo');

    expect(result).toBe(1);
  });

  it ('naiveStringSearch("Miles", "Hi") === 0', () => {
    const result = naiveStringSearch('Miles', 'Hi');

    expect(result).toBe(0);
  });

  it ('naiveStringSearch("Hello Hallo", "ll") === 2', () => {
    const result = naiveStringSearch('Hello Hallo', 'll');

    expect(result).toBe(2);
  });

  it ('naiveStringSearch("HaaHaaHaa", "Ha") === 3', () => {
    const result = naiveStringSearch('HaaHaaHaa', 'Ha');

    expect(result).toBe(3);
  });

  it ('naiveStringSearch("lorie loled", "lol") === 1', () => {
    const result = naiveStringSearch('lorie loled', 'lol');

    expect(result).toBe(1);
  });
});
