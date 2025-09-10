import { solution } from './01-전화번호-목록';

/**
["119", "97674223", "1195524421"]	false
["123","456","789"]	true
["12","123","1235","567","88"]	false
 */

/**
TODO: GPT 질문하기
1. 제한 사항을 Big O 로 표기하는 방법
 */

describe('250910 / 01-전화번호-목록', () => {
  it('solution() === false', () => {
    const result = solution(["119", "97674223", "1195524421"]);
    expect(result).toBe(false);
  });

  it('solution() === true', () => {
    const result = solution(["123","456","789"]);
    expect(result).toBe(true);
  });

  it('solution() === false', () => {
    const result = solution(["12","123","1235","567","88"]);
    expect(result).toBe(false);
  });
});
