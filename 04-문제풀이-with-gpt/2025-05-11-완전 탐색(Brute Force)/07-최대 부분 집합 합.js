/**
 * 🧩 연습 문제: 최대 부분 집합 합
 * ✅ 문제 설명:
 * 정수 배열 nums가 주어질 때,
 * 부분 집합들 중 합이 짝수인 부분 집합 중에서
 * 가장 큰 합을 찾아 반환해줘.
 */

/**
 * @param { number[] } nums
 */
function solution(nums) {
  let max = 0;

  dfs(0, 0);

  return max;

  function dfs(index, sum) {
    if (index >= nums.length) {
      if (sum % 2 === 0) {
        max = Math.max(max, sum);
      }

      return;
    }

    dfs(index + 1, sum + nums[index]);
    dfs(index + 1, sum);
  }
}

const questions = [
  {
    nums: [1, 2, 3, 4],
    answer: 10,
  },
  {
    nums: [12, 3, 7, -10],
    answer: 22,
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('최대 부분 집합 합');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
