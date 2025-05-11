/**
 * 🧩 문제 4: 배열의 중복된 값을 제거하라
 * 
 * 예: [1, 2, 2, 3, 4, 4, 4] → [1, 2, 3, 4]
 * 
 * @param { number[] } nums
 */
function solution(nums) {
  const answer = [];
  const numSet = new Set();

  nums.forEach(num => {
    if (!numSet.has(num)) {
      numSet.add(num);
      answer.push(num);
    }
  });

  return answer;
}

const questions = [
  {
    nums: [1, 2, 2, 3, 4, 4, 4],
    answer: [1, 2, 3, 4],
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('4. 배열의 중복된 값을 제거하라');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
