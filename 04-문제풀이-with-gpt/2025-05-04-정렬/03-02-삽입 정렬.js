/**
 * ✍️ 3. 삽입 정렬 (Insertion Sort)
 * 📌 개념 요약
 * 배열을 앞에서부터 하나씩 확인하며,
 * 자기보다 큰 값이 나올 때까지 왼쪽으로 이동시켜 삽입
 * 
 * 왼쪽 부분은 항상 정렬된 상태를 유지함
 * 
 * 🔁 예시: [5, 2, 4, 3, 1]
 * 1 → [2, 5, 4, 3, 1]
 * 
 * 2 → [2, 4, 5, 3, 1]
 * 
 * 3 → [2, 3, 4, 5, 1]
 * 
 * 4 → [1, 2, 3, 4, 5]
 * 
 * @param { number[] } nums
 */
function solution(nums) {
  const clonedNums = [...nums];

  for (let i = 1; i < clonedNums.length; i++) {
    const targetValue = clonedNums[i];
    let j = i - 1;

    while (j >= 0 && targetValue < clonedNums[j]) {
      clonedNums[j + 1] = clonedNums[j];
      j--;
    }

    clonedNums[j + 1] = targetValue;
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

  console.group('3. 삽입 정렬 (Insertion Sort)');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass; ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
