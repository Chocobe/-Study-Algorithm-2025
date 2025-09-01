/**
 * 특정 기수 (Radix) 의 숫자를 찾는 helper 함수
 * 
 * @param { number } value
 * @param { number } radix
 * @returns { number }
 */
export function getRadixValue(value, radix) {
  // value 를 10 ** radix 로 나누고,
  let parsedValue = Math.floor(value / (10 ** radix));

  // 문자열로 변환한 마지막 문자를 추출한다.
  parsedValue = String(parsedValue).slice(-1) || '0';

  // 추출한 마지막 문자를 number 로 변환하여, 반환한다.
  return Number(parsedValue);
};

/**
 * 숫자의 자릿수를 구하는 helper 함수
 * 
 * @param { number } value
 * @returns { number }
 */
export function digitCount(value) {
  return String(Math.abs(value)).length || 1;
};

/**
 * 숫자 배열의 가장 큰 수의 자릿수를 구하는 helper 함수
 * 
 * @param { number[] } arr
 * @returns { number }
 */
export function mostDigits(arr) {
  let mostDigits = 0;
  for (const value of arr) {
    mostDigits = Math.max(mostDigits, Math.abs(value));
  }

  return digitCount(mostDigits);
};

/**
 * Radix Sort 구현하기
 * 
 * @param { number[] } arr
 * @return { number[] }
 */
export function radixSort(arr) {
  // 가장 깃 자릿수를 구하기
  const maxDigitCount = mostDigits(arr);
  // 재배치를 위한 배열(bucket) 을 만들기
  let bucket;

  // i = 0; i < 가장 긴 자릿수; i++ 순회하며
  for (let i = 0; i < maxDigitCount; i++) {
    // bucket 초기화하기
    bucket = Array.from({ length: 10 }, () => []);

    // arr 를 순회하며,
    for (let j = 0; j < arr.length; j++) {
      // 현재 요소의 i번째 숫자 구하기
      const currentDigit = getRadixValue(arr[j], i);
      // bucket[i번째 숫자] 에 현재 요소 push 하기
      bucket[currentDigit].push(arr[j]);
    }

    // arr 를 비우고, bucket 을 flatten 해서 arr 에 저장하기
    arr.splice(0, arr.length, ...bucket.flat());
  }

  // arr 반환하기
  return arr;
};
