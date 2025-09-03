import { solution } from './01-최소직사각형';

describe('250903 / 01-최소직각사각형', () => {
  it('solution([...]) === 4000', () => {
    const result = solution([[60, 50], [30, 70], [60, 30], [80, 40]]);
    expect(result).toBe(4000);
  });

  it('solution([...]) === 120', () => {
    const result = solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]);
    expect(result).toBe(120);
  });

  it('solution([...]) === 133', () => {
    const result = solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]);
    expect(result).toBe(133);
  });
});
