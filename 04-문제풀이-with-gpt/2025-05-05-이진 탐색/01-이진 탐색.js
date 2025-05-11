/**
 * 📘 2. 이진 탐색(Binary Search) 개념 정리
 * 항목	설명
 * 정렬 필요	반드시 오름차순으로 정렬된 배열에서만 사용 가능
 * 기본 원리	중앙값과 target을 비교하여, 탐색 범위를 절반으로 줄이는 방식
 * 시간 복잡도	O(log n) – 한 번 비교할 때마다 절반이 사라짐
 * 공간 복잡도	O(1) (반복문), O(log n) (재귀 호출 스택)
 * 
 * @param { number[] } nums
 * @param { number } target
 * @param { number? } left
 * @param { number? } right
 */
function solution(nums, target, left = 0, right = nums.length - 1) {
  if (left > right) {
    return -1;
  }

  const midIndex = Math.floor((left + right) / 2);

  if (nums[midIndex] === target) {
    return midIndex;
  } else if (nums[midIndex] > target) {
    return solution(nums, target, left, midIndex - 1);
  } else {
    return solution(nums, target, midIndex + 1, right);
  }
}

const questions = [
  {
    nums: [1, 3, 5, 7, 9],
    target: 5,
    answer: 2,
  },
  {
    nums: [1, 3, 5, 7, 9],
    target: 8,
    answer: -1,
  },
];

questions.forEach(question => {
  const {
    nums,
    target,
    answer,
  } = question;

  const result = solution(nums, target);

  console.group('2. 이진 탐색');
  console.log('nums: ', nums);
  console.log('target: ', target);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.log('\n');
  console.groupEnd();
});
