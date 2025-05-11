/**
 * 🧮 2, 선택 정렬 (Selection Sort)
 * 📌 개념 요약
 * 남은 범위에서 가장 작은 값을 골라서 현재 위치와 교환
 * 
 * 한 번에 하나의 값을 확정시키는 방식
 * 
 * 느리지만 직관적이고, 구현이 간단
 * 
 * 🔁 예시: [5, 2, 4, 3, 1]
 * 1회차: 최소값 1 → [1, 2, 4, 3, 5]
 * 
 * 2회차: 최소값 2 → [1, 2, 4, 3, 5]
 * 
 * 3회차: 최소값 3 → [1, 2, 3, 4, 5]
 * 
 * 4회차: 최소값 4 → [1, 2, 3, 4, 5]
 * 
 * 이미 정렬 완료!
 */
function solution(nums) {
  const clonedNums = [...nums];

  for (let i = 0; i < clonedNums.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < clonedNums.length; j++) {
      if (clonedNums[indexOfMin] > clonedNums[j]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin === i) {
      continue;
    }

    [clonedNums[i], clonedNums[indexOfMin]] = [clonedNums[indexOfMin], clonedNums[i]];
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

  console.group('2, 선택 정렬 (Selection Sort)');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
