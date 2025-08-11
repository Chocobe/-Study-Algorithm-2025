/**
 * 문제 : 숫자로 구성된 배열에서 값의 중복을 제외한 개수를 반환하기
 * 
 * 조건1 : Set 을 사용하지 않고, multiple pointers 로 구현하기
 * 조건2 : 배열은 정렬되어 있다.
 * 
 * @param { number[] } arr
 * @returns { number }
 */
export function countUniqueValues_lecture(arr) {
  // NOTE: 강좌에서는 while 대신 for 를 사용했다

  // arr.length === 0 이라면, 0 반환하기
  if (!arr.length) {
    return 0;
  }

  // 비교 대상 index 변수 선언하기
  let pointer = 0;

  // target 변수를 사용하여 arr 순회하기
  for (let target = 1; target < arr.length; target++) {
    // arr[대상] !== arr[target] 이라면,
    if (arr[pointer] !== arr[target]) {
      // 대상++
      pointer++;
      // arr[대상] = arr[target]
      arr[pointer] = arr[target];
    }
  }

  // 대상 index + 1 반환하기
  return pointer + 1;
}
