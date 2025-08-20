/**
 * NOTE: Radix Sort (기수 정렬)
 * => 숫자 배열 각 요소들의 각 자릿수 숫자를 추출하여,
 * => Bucket 이라는 배열의 index 로 사용하여 재배치하는 방식의 정렬방법이다.
 * 
 * 필요한 helper 함수
 * => 배열의 숫자들 중, 가장 긴 자릿수 구하기 (재배치 반복 횟수로 사용한다.)
 * => 배열 요소값의 특정 자릿수 숫자 구하기 (재배치할 Bucket index 로 사용한다.: 10의 n승 숫자 => 이를 Radix 라고 한다.)
 */

/**
 * 특정 기수 (Radix) 의 숫자를 찾는 helper 함수
 * 
 * @param { number } value
 * @param { number } radix
 * @returns { number }
 */
export function getDigit(value, radix) {
  return Math.floor(Math.abs(value) / Math.pow(10, radix)) % 10;
};

/**
 * 숫자의 자릿수를 구하는 helper 함수
 * 
 * @param { number } value
 * @returns { number }
 */
export function digitCount(value) {
  if (value === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(value))) + 1;
};

/**
 * 숫자 배열의 가장 큰 숫자의 자릿수를 구하는 helper 함수
 * 
 * @param { number[] } arr
 * @returns { number }
 */
export function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
};

/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function radixSort(arr) {
  // 최대 자릿수 구하기
  const maxDigitCount = mostDigits(arr);

  // i = 0; i < 최대 자릿수; i++ 순회하며,
  for (let i = 0; i < maxDigitCount; i++) {
    // 재배치를 위한 bucket 배열 만들기
    const digitBucket = Array.from({ length: 10 }, () => []);

    // arr 를 순회하며,
    for (const value of arr) {
      // arr[j] 의 i radix 에 대한 숫자 구하기
      const digit = getDigit(value, i);
      // bucket[i] 에 arr[j] 를 push 하기
      digitBucket[digit].push(value);
    }

    // bucket 을 순서대로 flatten 해서 arr 에 적용하기
    arr = [].concat(...digitBucket);
  }

  // arr 반환하기
  return arr;
};
