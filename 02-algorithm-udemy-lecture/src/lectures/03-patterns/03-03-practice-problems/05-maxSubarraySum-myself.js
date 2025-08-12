/**
 * 문제5: 정수의 배열과 숫자가 주어졌을 때,
 * => 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는
 * => maxSubarraySum 이라는 함수를 작성하세요.
 * =>
 * => 하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요.
 * => 아래 첫번째 예제에서 [100, 200, 300] 은 원래 배열의
 * => 하위 배열이지만 [100, 300] 은 그렇지 않습니다.
 * 
 * => 조건1: Time Complexity - O(N)
 * => 조건2: Space Complexity - O(1)
 */

/**
 * @param { number[] } arr
 * @param { number } length
 * @returns { number }
 */
export function maxSubarraySum(arr, length) {
  // arr.length < length 라면, null 반환하기
  if (arr.length < length) {
    return null;
  }

  // 최대 부분합 변수 만들기
  let maxSum = 0;
  // 최대 부분합 초기값 구하기
  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }

  // 현재 부분합 변수 만들기
  let currentSum = maxSum;

  // for 종단점으로 arr.length - length 까지 순회하면서,
  for (let i = 0; i < arr.length - length; i++) {
    // 현재 부분합에 `arr[i + length] - arr[length]` 반영하기
    currentSum += arr[i + length] - arr[i];
    // 현재 부분합이 최대 부분합보다 크면, 최대 부분합 갱신하기
    maxSum = Math.max(currentSum, maxSum);
  }

  // 최대 부분합 반환하기
  return maxSum;
}
