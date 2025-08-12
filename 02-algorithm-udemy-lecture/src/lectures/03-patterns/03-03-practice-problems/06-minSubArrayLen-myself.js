/**
 * 문제6: 양수 배열과 양수를 인자로 받는 minSubArrayLen 이라는 함수를 만드세요.
 * => 이 함수는 합이 함수에 전달된 양수보다 크거나,
 * => 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다.
 * => 값이 없는 경우 0을 반환합니다.
 * 
 * => 조건1: Time Complexity - O(n)
 * => 조건2: Space Complexity - O(1)
 * 
 * @example
 * minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2
 * minSubArrayLen([2, 1, 6, 5, 4], 9) === 2
 * minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0
 */

/**
 * @param { number[] } arr
 * @param { number } min
 * @returns { number }
 */
export function minSubArrayLen(arr, min) {
  // 현재 부분합 변수 만들기
  let currentSum = arr[0];
  // 조건에 맞는 최소 길이 변수 만들기
  let minLength = Infinity;

  // 시작 index 만들기
  let start = 0;
  // 마지막 index 만들기
  let last = 0;

  // while (마지막 index < arr.length) 순환하면서,
  while (last < arr.length && start <= last) {
    // 현재 부분합 < min, 
    if (currentSum < min) {
      // 마지막 index +1
      last++;
      // 현재 부분합에 arr[마지막] 더하기
      currentSum += arr[last];
    }
    // 현재 부분합 >= min, 
    else {
      // 최소 길이 갱신하기
      minLength = Math.min(last - start + 1, minLength);

      // 현재 부분합에 arr[start] 빼기
      currentSum -= arr[start];
      // 시작 index +1
      start++;
    }
  }

  // 최소 변수 길이가 Infinity 라면, 0 반환하기
  // 아니라면, 최소 길이 반환하기
  return minLength === Infinity ? 0 : minLength;
}
