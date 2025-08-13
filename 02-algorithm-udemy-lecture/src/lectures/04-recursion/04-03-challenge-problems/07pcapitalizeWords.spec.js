import { capitalizeWords } from './07-capitalizeWords';

describe('04-03 / 07-capitalizeWords', () => {
  it ('capitalizeWords(["hello", "world"]) === ["HELLO", "WORLD"]', () => {
    const result = capitalizeWords(['hello', 'world']);

    expect(result).toEqual(['HELLO', 'WORLD']);
  });
});
