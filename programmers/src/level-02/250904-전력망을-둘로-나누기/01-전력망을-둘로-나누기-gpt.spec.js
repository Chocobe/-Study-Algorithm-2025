import { solution } from './01-전력망을-둘로-나누기-gpt';

/**
{
  '1': [ 3 ],
  '2': [ 3 ],
  '3': [ 1, 2, 4 ],
  '4': [ 3, 5, 6, 7 ],
  '5': [ 4 ],
  '6': [ 4 ],
  '7': [ 4, 8, 9 ],
  '8': [ 7 ],
  '9': [ 7 ]
}
 */

// ([4, 7]) 4, 3, 5, 7, 1, 2, 8, 9

describe('250904 / 01-전력망을-둘로-나누기', () => {
  it('solution() === 3', () => {
    const result = solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]);
    expect(result).toBe(3);
  });

  it('solution() === 0', () => {
    const result = solution(4, [[1,2],[2,3],[3,4]]);
    expect(result).toBe(0);
  });

  it('solution() === 1', () => {
    const result = solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]);
    expect(result).toBe(1);
  });
});

