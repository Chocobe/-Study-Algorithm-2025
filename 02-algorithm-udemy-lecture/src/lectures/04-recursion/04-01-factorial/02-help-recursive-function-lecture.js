/**
 * NOTE: Help Recursive Function
 * => 함수 내부에 재귀 함수를 정의하여,
 * => 재귀 함수의 연산 결과는 외부 함수의 closure 를 갱신하는 방식이다.
 * 
 * => Help Recursive Function 은 선택사항이며,
 * => 구현 스타일에 따라 사용하면 된다.
 */

/**
 * @param { number } num
 * @returns { number }
 */
export function factorial_helpRecursive(num) {
  // 결과값 변수 만들기
  let result = num > 0 ? 1 : num;

  // Help Recursive Function 만들기
  function helpRecursive(num) {
    // (Base Case) num 이 2보다 작다면,
    if (num < 2) {
      // 재귀 호출 종료
      return;
    }

    // 결과값에 num 곱하기
    result *= num;
    // Help Recursive Function 을 num - 1 인자로 호출하기
    helpRecursive(num - 1);
  }

  // Help Recursive Function 호출하기
  helpRecursive(num);
  // 결과값 반환하기
  return result;
}
