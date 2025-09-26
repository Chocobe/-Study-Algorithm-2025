/**
 * 문제: _과제 진행하기_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/176962
 * 
 * @param { string[][] } plans
 * @returns {}
 */
export function solution(plans) {
  const normalizedPlans = plans
    .map(([name, start, duration]) => {
      return [name, parseToMinutes(start), Number(duration)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const archiveStack = [];

  for (let i = 0; i < normalizedPlans.length - 1; i++) {
    const current = normalizedPlans[i];
    const next = normalizedPlans[i + 1];
    const remainingMM = (current[1] + current[2]) - next[1];

    if (remainingMM > 0) {
      current[2] = remainingMM;
      archiveStack.push(current);
    } else if (remainingMM < 0) {
      result.push(current[0]);
      let remainingArchiveMM = Math.abs(remainingMM);

      while (remainingArchiveMM > 0 && archiveStack.length) {
        const archive = archiveStack.pop();
        remainingArchiveMM -= archive[2];

        if (remainingArchiveMM < 0) {
          archive[2] = Math.abs(remainingArchiveMM);
          archiveStack.push(archive);
          break;
        } else {
          result.push(archive[0]);
        }
      }
    } else {
      result.push(current[0]);
    }
  }

  result.push(
    normalizedPlans[normalizedPlans.length - 1][0],
    ...archiveStack.reverse().map(([name]) => name)
  );

  return result;
};

function parseToMinutes(time) {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
}
