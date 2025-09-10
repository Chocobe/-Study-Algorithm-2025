/**
 * 문제: _모의고사_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 
 * @param { number[] } answers
 * @returns { number[] }
 */
export function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let maxCount = 0;
  const result = {};

  students.forEach((student, indexOfStudent) => {
    let count = 0;

    for (let i = 0; i < answers.length; i++) {
      const index = i % student.length;

      if (answers[i] === student[index]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
    }

    result[count] = result[count] ?? [];
    result[count].push(indexOfStudent + 1);
  });

  return result[maxCount];
};
