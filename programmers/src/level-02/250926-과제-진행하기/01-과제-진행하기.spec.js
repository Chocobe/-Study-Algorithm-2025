import { solution } from './01-과제-진행하기';

/**
plans                                                                                                              result
[["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]                                   ["korean", "english", "math"]
[["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]   ["science", "history", "computer", "music"]
[["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]                                           ["bbb", "ccc", "aaa"]
 */

describe('250926 / 01-과제-진행하기', () => {
  it('solution() === ["korean", "english", "math"]', () => {
    const result = solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]);
    expect(result).toEqual(["korean", "english", "math"]);
  });

  it('solution() === ["science", "history", "computer", "music"]', () => {
    const result = solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]);
    expect(result).toEqual(["science", "history", "computer", "music"]);
  });

  it('solution() === ["bbb", "ccc", "aaa"]', () => {
    const result = solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]);
    expect(result).toEqual(["bbb", "ccc", "aaa"]);
  });
});
