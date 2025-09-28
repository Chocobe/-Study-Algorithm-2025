import { solution } from './01-가장-많이-받은-선물';

/**
friends                                           gifts                                                                                                         result
["muzi", "ryan", "frodo", "neo"]                  ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]   2
["joy", "brad", "alessandro", "conan", "david"]   ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]             4
["a", "b", "c"]                                   ["a b", "b a", "c a", "a c", "a c", "c a"]                                                                    0
 */

describe('250928 / 01-가장-많이-받은-선물', () => {
  it('solution() === 2', () => {
    const result = solution(
      ["muzi", "ryan", "frodo", "neo"],
      ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
    );
    expect(result).toBe(2);
  });

  it('solution() === 4', () => {
    const result = solution(
      ["joy", "brad", "alessandro", "conan", "david"],
      ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
    );
    expect(result).toBe(4);
  });

  it('solution() === 0', () => {
    const result = solution(
      ["a", "b", "c"],
      ["a b", "b a", "c a", "a c", "a c", "c a"]
    );
    expect(result).toBe(0);
  });
});
