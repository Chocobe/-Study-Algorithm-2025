/**
 * @param { number[] } answers
 * @returns { number[] }
 */
export function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = students.map(pattern => {
    return answers.reduce((count, answer, i) => {
      return answer === pattern[i % pattern.length] ? count + 1 : count;
    }, 0);
  });

  const maxScore = Math.max(...scores);

  return scores
    .map((score, i) => score === maxScore ? i + 1 : null)
    .filter(Boolean);
};
