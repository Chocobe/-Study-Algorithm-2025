import { describe, expect, it } from 'vitest';
import { sub, sum } from './codex-demonstration.js';

describe('sum', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('handles negative values', () => {
    expect(sum(-5, 2)).toBe(-3);
  });
});

describe('sub', () => {
  it('returns the difference of two numbers', () => {
    expect(sub(5, 2)).toBe(3);
  });

  it('handles negative results', () => {
    expect(sub(2, 5)).toBe(-3);
  });
});
