import { solution } from './01-완주하지-못한-선수';
/**
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
 */
describe('250910 / 01-완주하지-못한-선수', () => {
  it('solution() === "leo"', () => {
    const result = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
    expect(result).toBe('leo');
  });

  it('solution() === "vinko"', () => {
    const result = solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);
    expect(result).toBe('vinko');
  });

  it('solution() === "mislav"', () => {
    const result = solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
    expect(result).toBe('mislav');
  });
});
