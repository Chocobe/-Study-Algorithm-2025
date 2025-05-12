/**
 * ✅ 이진 탐색 개념 복습 (1분 정리)
 * * 대상: 정렬된 배열
 * * 원리: 중앙값(mid)을 기준으로 좌/우로 반씩 줄이며 탐색
 * * 시간: 복잡도	O(log n)
 */

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
  return recursive([], nums);

  function recursive(selectedNums, nums) {
    const maxValue = Math.max(...nums);
    const indexOfMaxValue = nums.find(num => num === maxValue);

    const clonedSelectedNums = [
      ...selectedNums,
      maxValue,
    ];

    const total = clonedSelectedNums.reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (total >= target) {
      return clonedSelectedNums.length;
    }

    return recursive(clonedSelectedNums, nums.splice(indexOfMaxValue, 1));
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
