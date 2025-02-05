/**
 * 첫 날 추천 문제
 * 주제: 배열과 문자열
 * 문제:
 *
 * "주어진 문자열에서 특정 문자의 개수 세기"
 * 예) input = "hello world", target = "l" → output = 3
 * 
 * @param { string } input
 * @param { string } target
 */
function solution(input, target) {
  const regExp = new RegExp(target, 'g');
  const match = input.match(regExp);

  return match?.length ?? 0;
}

console.log(solution('hello world', 'l'));
