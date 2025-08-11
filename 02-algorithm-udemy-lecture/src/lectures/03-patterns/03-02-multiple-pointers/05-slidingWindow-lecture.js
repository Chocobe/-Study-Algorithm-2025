/**
 * NOTE: Sliding Window pattern
 * => 배열이나 문자열의 하위 집합을 찾는데 유용한 패턴이다
 * 
 * => 주어진 범위가 있을 때,
 * => => 범위의 시작값을 빼고
 * => => 범위의 끝값을 더하는 흐름의 루프를 사용한다.
 * 
 * => Big O(n)
 */

/**
 * 문제: 숫자 배열과 범위가 주어질 때, 범위의 합이 가장 큰 값을 구하기
 * 
 * @param { number[] } arr
 * @param { number } range
 * @returns { number }
 */
export function slidingWindow(arr, range) {
  // range > arr.length 라면, null 반환하기
  if (range > arr.length) {
    return null;
  }

  // 최대 부분한 변수 선언하기
  let maxSum = 0;
  // 현재 부분합 변수 선언하기
  let currentSum = 0;

  // 배열의 최초 범위의 합 구하고,
  for (let i = 0; i < range; i++) {
    // 최대 부분합에 할당하기
    maxSum += arr[i];
  }
  // 현재 부분합에 할당하기
  currentSum = maxSum;

  // range 시작 index 를 loop 로 하여 arr 를 순회하는데,
  for (let start = 0; start < arr.length - range; start++) {
    // 범위 시작 index 의 값을 `현재 부분합` 에서 빼고,
    currentSum -= arr[start];
    // 범위 끝 index 의 값을 `현재 부분합` 에 더하여, `현재 부분합` 을 갱신한다
    currentSum += arr[start + range];

    // 현재 부분합이 최대 부분합보다 크면, 최대 부분합을 갱신한다.
    maxSum = Math.max(currentSum, maxSum);
  }

  // 최대 부분합을 반환한다.
  return maxSum;
}
