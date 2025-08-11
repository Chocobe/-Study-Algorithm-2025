import { slidingWindow } from './05-slidingWindow-lecture';

describe('03-02-multiple-pointers / 05-slidingWindow-lecture', () => {
  it ('slidingWindow([1, 4, 3, 1, 9, 10, 2, 8], 3) === 21', () => {
    const result = slidingWindow([1, 4, 3, 1, 9, 10, 2, 8], 3);

    expect(result).toBe(21);
  });

  it ('slidingWindow([8, 19, 13, 10, 12, 3, 16, 18, 19, 15], 5) === 71', () => {
    const result = slidingWindow([8, 19, 13, 10, 12, 3, 16, 18, 19, 15], 5);

    expect(result).toBe(71);
  });

  it ('slidingWindow([], 1) === null', () => {
    const result = slidingWindow([], 1);

    expect(result).toBeNull();
  });

  it ('slidingWindow([3], 1) === 3', () => {
    const result = slidingWindow([3], 1);

    expect(result).toBe(3);
  });

  it ('slidingWindow([1, 2], 3) === null', () => {
    const result = slidingWindow([1, 2], 3);

    expect(result).toBeNull();
  });
});
