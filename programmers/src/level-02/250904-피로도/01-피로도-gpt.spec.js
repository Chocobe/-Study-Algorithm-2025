import { solution } from './01-피로도-gpt';

describe('250904 / 01-피로도-gpt', () => {
  it('solution() === 3', () => {
    const result = solution(80, [[80, 20], [50, 40], [30, 10]]);
    expect(result).toBe(3);
  });
});
