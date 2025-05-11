/**
 * 📘 조합(Combination) 개념 요약
 * 
 * * n개의 원소 중에서 r개를 선택 (순서 상관 ❌)
 * * n = 3, r = 2 → [1,2], [1,3], [2,3]
 * * [1,2] 와 [2,1] 은 같은 조합
 * * 복잡도	보통 O(nCr), DFS로 풀면 지수시간
 * 
 * ✅ 조합 구현 아이디어 (DFS 방식)
 * DFS로 깊이를 증가시키면서 숫자를 하나씩 고른다.
 * 
 * 이미 고른 숫자보다 더 큰 숫자만 다음에 고른다 → 중복 방지 & 정렬 유지
 * 
 * 깊이가 r에 도달하면 result에 push!
 */

/**
 * 🎯 예제 문제
 * 1 ~ n까지 숫자 중, r개를 뽑는 모든 조합을 오름차순으로 출력하라.
 */

/**
 * @param { number } n
 * @param { number } r
 */
function solution(n, r) {
  const result = [];
  const currentComposition = [];

  dfs(1, 0);

  return result;

  function dfs(startValue, depth) {
    if (depth === r) {
      result.push([...currentComposition]);
      return;
    }

    for (let i = startValue; i <= n; i++) {
      currentComposition.push(i);
      dfs(i + 1, depth + 1);

      // 백트래킹
      currentComposition.pop();
    }
  }
}

const questions = [
  {
    n: 4,
    r: 2,
    answer: [
      [1,2],
      [1,3],
      [1,4],
      [2,3],
      [2,4],
      [3,4],
    ],
  },
];

questions.forEach(question => {
  const {
    n,
    r,
    answer,
  } = question;

  const result = solution(n, r);

  console.group('📘 조합(Combination) 개념 요약');
  console.log('n: ', n);
  console.log('r: ', r);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
