/**
 * 🎯 실전 완전 탐색 문제 추천:
 * "순열을 이용한 최대 연산 결과 구하기"
 * 
 * 📘 문제 설명:
 * 정수 배열이 주어져. 이 배열의 순서를 바꿔가며 인접한 두 수의 차이를 모두 더해.
 * 이 값들 중에서 최댓값을 구해보자!
 */

/**
 * @param { number[] } nums
 */
function solution(nums) {
  const currentPermutation = [];
  const visited = Array.from({
    length: nums.length
  }, () => false);

  let max = 0;

  dfs(0);

  return max;

  function dfs(depth) {
    if (depth >= nums.length) {
      let value = 0;

      for (let i = 0; i < currentPermutation.length - 1; i++) {
        value += Math.abs(currentPermutation[i] - currentPermutation[i + 1]);
      }

      max = Math.max(max, value);

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      currentPermutation.push(nums[i]);

      dfs(depth + 1);

      visited[i] = false;
      currentPermutation.pop();
    }
  }
}

const questions = [
  {
    nums: [1, 2, 3],
    answer: 3,
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('순열을 이용한 최대 연산 결과 구하기');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
