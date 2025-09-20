import { solution } from './01-성격-유형-검사하기';

/**
지표 번호   성격          유형
1번 지표   라이언형(R),   튜브형(T)
2번 지표   콘형(C),      프로도형(F)
3번 지표   제이지형(J),   무지형(M)
4번 지표   어피치형(A),   네오형(N)
 */

/**
survey                           choices           result
["AN", "CF", "MJ", "RT", "NA"]   [5, 3, 2, 7, 5]   "TCMA"
["TR", "RT", "TR"]               [7, 1, 3]         "RCJA"
 */

describe('250920 / 01-성격-유형-검사하기', () => {
  it('solution() === TCMA', () => {
    const result = solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
    expect(result).toBe('TCMA');
  });

  it('solution() === "RCJA"', () => {
    const result = solution(["TR", "RT", "TR"], [7, 1, 3]);
    expect(result).toBe('RCJA');
  });
});

/**

지표: [비동의, 동의]

C - 4
=> 1 - 4 === -3 => 매우 비동의
=> 7 - 4 === 3 => 매우 동의

=> C - 4 > 0 이라면, 동의값
=> C - 4 < 0 이라면, 비동의값

 */