/**
 * 🧼 1, 버블 정렬이란?
 * 옆에 있는 요소와 비교해서 큰 값을 뒤로 보내는 방식
 * 
 * 가장 큰 값이 "거품처럼" 맨 뒤로 떠오른다
 * 
 * 🔁 예시: [5, 2, 4, 3, 1]
 * 1회차 → [2, 4, 3, 1, 5]
 * 
 * 2회차 → [2, 3, 1, 4, 5]
 * 
 * 3회차 → [2, 1, 3, 4, 5]
 * 
 * 4회차 → [1, 2, 3, 4, 5]
 * 
 * @param { number[] } numbs
 */
function solution(nums) {
  const clonedNums = [...nums];

  for (let i = 0; i < clonedNums.length; i++) {
    const end = clonedNums.length - i - 1;
    let swapped = false;

    for (let j = 0; j < end; j++) {
      const current = clonedNums[j];
      const next = clonedNums[j + 1];

      if (current > next) {
        [clonedNums[j + 1], clonedNums[j]] = [clonedNums[j], clonedNums[j + 1]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return clonedNums;
}

const questions = [
  {
    nums: [5, 2, 4, 3, 1],
    answer: [1, 2, 3, 4, 5],
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('1. 버블 정렬이란?');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
