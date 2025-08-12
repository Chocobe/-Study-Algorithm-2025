/**
 * 문제2: 가변 인자를 입력받고, 인자중 중복된 값이 있으면 true, 없으면 false 반환하기
 * => Frequency Count 또는 Multiple Pointers 로 풀 수 있다.
 * 
 * => 조건1: Big O(n)
 * 
 * @example
 * areThereDuplicates(1, 2, 3) === false
 * areThereDuplicates(1, 2, 2) === true
 * areThereDuplicates('a', 'b', 'c', 'a') === true
 */

/**
 * Frequency Count pattern 으로 풀기
 * 
 * @param { Array<string | number> } args
 * @returns { boolean }
 */
export function areThereDuplicates_frequencyCount(...args) {
  // args 각 요소의 빈도수를 저장할 lookup 만들기
  const lookup = {};

  // args 를 순회하며,
  for (const value of args) {
    // lookup[value] 가 truthy 라면, true 반환하기
    if (lookup[value]) {
      return true;
    }

    lookup[value] = 1;
  }

  // 중복없이 순회를 마쳤다면, false 반환하기
  return false;
}

/**
 * Multiple Pointers pattern 으로 풀기
 * => 정렬되어 있다고 가정해야 사용할 수 있음
 * 
 * @param { Array<string | number> } sortedArgs
 * @returns { boolean }
 */
export function areThereDuplicates_multiplePointers(...args) {
  // args 가 빈 배열이라면, false 반환
  if (!args.length) {
    return false;
  }

  const [firstArg, ...restArgs] = args.sort();

  // 현재 pointer index 변수 만들기
  let pointer = 0;
  // 중복을 제외한 각 요소를 저장할 배열 만들기 (pointer 가 바라보는 배열)
  const arr = [firstArg];

  // args 를 순회하며,
  for (const value of restArgs) {
    // arr[pointer] === 루프 요소 라면, true 반환하기
    if (arr[pointer] === value) {
      return true;
    }
    // arr[pointer] !== 루프 요소 라면,
    else {
      // pointer++
      pointer++;
      // arr[pointer] = 루프 요소\
      arr[pointer] = value;
    }
  }

  // 루프가 종료됬다면, false 반환하기
  return false;
}