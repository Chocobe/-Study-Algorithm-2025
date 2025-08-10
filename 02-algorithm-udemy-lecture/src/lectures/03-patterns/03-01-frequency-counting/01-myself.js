/**
 * 문제:
 * => arr1 의 각 요소의 제곱이 arr2 에 모두 있다면 true, 아니면 false
 * => 
 * => 조건1: 중복값 존재함
 * => 조건2: arr1 의 각 중복값 개수만큼, 대응하는 제곱값이 arr2 에도 중복값 개수가 일치해야 한다
 * => 조건3: arr1 과 arr2 를 구성하는 요소의 순서는 고려하지 않는다.
 * 
 * 시간 복잡도: Big O(n)
 * 
 * @param { number[] } arr1 
 * @param { number[] } arr2 
 * @returns { boolean }
 */
export function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 분석 2:
  // arr1 => Record<요소, 개수> 형태로 변환한다. (obj1)
  const obj1 = arr1.reduce((obj1, key) => {
    obj1[key] = ++obj1[key] || 1;
    return obj1;
  }, {});

  // arr2 => Record<요소, 개수> 형태로 변환한다. (obj2)
  const obj2 = arr2.reduce((obj2, key) => {
    obj2[key] = ++obj2[key] || 1;
    return obj2;
  }, {});

  // obj1.entries(([key, count]) 를 사용하여 순회하며, true/false 를 검사한다.
  for (const [strKey1, count1] of Object.entries(obj1)) {
    const key1 = Number(strKey1);
    const key2 = key1 ** 2;

    // `obj1[key]` !== `obj2[obj1 ^ 2]` 라면, false 반환하기
    if (count1 !== obj2[key2]) {
      return false;
    }
  }

  return true;
  // 모든 요소를 순회했는데도 false 를 반환하지 않았다면, true 반환하기
}
