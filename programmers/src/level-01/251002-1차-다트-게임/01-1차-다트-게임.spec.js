import { solution } from './01-1차-다트-게임';

/**
dartResult   answer
1S2D*3T      37
1D2S#10S     9
1D2S0T       3
1S*2T*3S     23
1D#2S*3S     5
1T2D3D#      -4
1D2S3T*      59
 */

describe('251002 / 01-1차-다트-게임', () => {
  it('solution() === 37', () => {
    const result = solution('1S2D*3T');
    expect(result).toBe(37);
  });

  it('solution() === 9', () => {
    const result = solution('1D2S#10S');
    expect(result).toBe(9);
  });

  it('solution() === 3', () => {
    const result = solution('1D2S0T');
    expect(result).toBe(3);
  });

  it('solution() === 23', () => {
    const result = solution('1S*2T*3S');
    expect(result).toBe(23);
  });

  it('solution() === 5', () => {
    const result = solution('1D#2S*3S');
    expect(result).toBe(5);
  });

  it('solution() === -4', () => {
    const result = solution('1T2D3D#');
    expect(result).toBe(-4);
  });

  it('solution() === 59', () => {
    const result = solution('1D2S3T*');
    expect(result).toBe(59);
  });
});
