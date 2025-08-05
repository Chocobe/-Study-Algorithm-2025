/**
 * 두 번째 추천 문제
 * 주제: 배열과 해시
 * 문제:
 * "주어진 배열에서 가장 자주 등장한 숫자를 찾아라. 동일한 빈도의 숫자가 여러 개일 경우, 가장 작은 숫자를 반환하라."
 *
 * 입력 예시:
 * nums = [1, 3, 2, 3, 1, 1, 4, 2, 2]
 * 출력 예시: `1`
 * 
 * @param { number[] } nums
 */
function solution(nums) {
  let max = 0;

  const map = nums
    .reduce((map, num) => {
      const nextValue = map[num] ? map[num] + 1 : 1;
      map[num] = nextValue;

      max = Math.max(max, nextValue);

      return map;
    }, {});

  return Object
    .entries(map)
    .filter(([_num, value]) => value === max)
    .reduce((answer, [num]) => Math.min(answer, Number(num)), Number.POSITIVE_INFINITY);
}

console.log(solution([1, 3, 2, 3, 1, 1, 4, 2, 2]));
