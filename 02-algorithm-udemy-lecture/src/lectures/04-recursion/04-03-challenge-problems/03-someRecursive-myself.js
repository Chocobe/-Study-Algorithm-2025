/**
 * 문제3: 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오.
 * => 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다.
 * => 그렇지 않으면 false를 반환합니다.
 * 
 * @example
 * SAMPLE INPUT / OUTPUT
 * const isOdd = val => val % 2 !== 0;
 * 
 * someRecursive([1,2,3,4], isOdd) // true
 * someRecursive([4,6,8,9], isOdd) // true
 * someRecursive([4,6,8], isOdd) // false
 * someRecursive([4,6,8], val => val > 10); // false
 */

/**
 * @param { number[] } arr
 * @param { (value: number) => boolean } callback
 * @returns { boolean }
 */
export function someRecursive(arr, callback) {
  // (Base Case) arr.length 가 0 이라면, false 반환하기
  if (!arr.length) {
    return false;
  }

  // callback 에 arr[0] 를 넘겨주고 `||` arr[0] 을 제거하여 someRecursive 호출하기
  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
};
