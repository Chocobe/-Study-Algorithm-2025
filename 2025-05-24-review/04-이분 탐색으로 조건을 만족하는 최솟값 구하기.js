/**
 * 🎯 예제 문제: "이분 탐색으로 조건을 만족하는 최솟값 구하기"
 * 문제 설명:
 * 길이가 n인 정수 배열이 있어.
 * 이 배열에서 합이 target 이상이 되는 가장 짧은 연속 부분 배열의 길이를 구해줘.
 */

/**
 * @param { number[] } nums
 * @param { number } target
 */
function solution(nums, target) {
  let minLength = nums.length;
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const isPossible = checkIsPossible(mid);

    if (isPossible) {
      right = mid - 1;
      minLength = Math.min(minLength, mid);
    } else {
      left = mid + 1;
    }
  }

  return minLength;

  function checkIsPossible(length) {
    let sum = nums.slice(0, length).reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (sum >= target) {
      return true;
    }

    for (let i = length; i < nums.length; i++) {
      sum += nums[i] - nums[i - length];

      if (sum >= target) {
        return true;
      }
    }

    return false;
  }
}

const questions = [
  {
    nums: [2, 3, 1, 2, 4, 3],
    target: 7,
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

  console.group('이분 탐색으로 조건을 만족하는 최솟값 구하기');
  console.log('nums: ', nums);
  console.log('target: ', target);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});

/**
 * @param { number[] } nums
 * @param { number } target
 */
function maxSolution(nums, target) {
  let maxLength = 1;
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const isPossible = checkIsPossible(mid);

    if (isPossible) {
      left = mid + 1;
      maxLength = Math.max(maxLength, mid);
    } else {
      right = mid - 1;
    }
  }

  return maxLength;

  function checkIsPossible(length) {
    let sum = nums.slice(0, length).reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (sum <= target) {
      return true;
    }

    for (let i = length; i < nums.length; i++) {
      sum += nums[i] - nums[i - length];

      if (sum <= target) {
        return true;
      }
    }

    return false;
  }
}

const maxQuestions = [
  {
    nums: [2, 3, 1, 2, 4, 3],
    target: 7,
    answer: 3,
  },
];

maxQuestions.forEach(question => {
  const {
    nums,
    target,
    answer,
  } = question;

  const result = maxSolution(nums, target);

  console.group('이분 탐색으로 조건을 만족하는 최대값 구하기');
  console.log('nums: ', nums);
  console.log('target: ', target);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
