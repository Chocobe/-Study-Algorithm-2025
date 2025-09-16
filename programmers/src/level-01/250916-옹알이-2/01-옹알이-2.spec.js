import { solution } from './01-옹알이-2';

/**
가능한 발음: "aya", "ye", "woo", "ma"

babbling                                         result
["aya", "yee", "u", "maa"]                       1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]   2
 */

describe('250916 / 01-옹알이-2', () => {
  it('solution() === 1', () => {
    const result = solution(["aya", "yee", "u", "maa"]);
    expect(result).toBe(1);
  });

  it('solution() === 2', () => {
    const result = solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
    expect(result).toBe(2);
  });
});
