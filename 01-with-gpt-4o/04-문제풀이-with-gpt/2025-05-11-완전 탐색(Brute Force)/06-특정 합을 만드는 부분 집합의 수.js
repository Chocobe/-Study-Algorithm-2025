/**
 * 🧩 연습 문제: 특정 합을 만드는 부분 집합의 수
 * 문제 설명:
 * 
 * 정수 배열 nums와 정수 target이 주어질 때,
 * 
 * nums의 원소들로 만들 수 있는 부분 집합 중 합이 target인 경우의 수를 구하자.
 */

/**
 * @param { number[] } nums
 * @param { number } target
 */
function solution(nums, target) {
  const targetCompositions = [];

  dfs(0, []);

  return targetCompositions.length;

  function dfs(index, composition) {
    if (index >= nums.length) {
      const sum = composition.reduce((acc, value) => {
        return acc + value;
      }, 0);

      if (sum === target) {
        targetCompositions.push(composition);
      }

      return;
    }

    dfs(index + 1, [
      ...composition,
      nums[index],
    ]);

    dfs(index + 1, composition);
  }
}

const questions = [
  {
    nums: [1, 2, 3],
    target: 3,
    answer: 2,
  },
];

questions.forEach(question => {
  const {
    nums,
    target,
    answer,
  } = question;

  const result = solution(nums, target);

  console.group('특정 합을 만드는 부분 집합의 수');
  console.log('nums: ', nums);
  console.log('target: ', target);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
