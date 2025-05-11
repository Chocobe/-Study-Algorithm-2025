/**
 * ✅ 완전 탐색 개념 요약
 * 항목	설명
 * 💡 정의	가능한 모든 경우를 탐색하는 방식
 * 🧠 사용 예시	비밀번호 조합, 조합/순열, 2차원 배열 완전 탐색 등
 * ⛏️ 구현 방식	for문 중첩, 재귀, 백트래킹 등
 * ⏱️ 시간 복잡도	일반적으로 O(n!), O(2ⁿ) 등으로 매우 큼
 * 📌 적용 시점	문제의 조건에서 가능한 입력의 범위가 작을 때 (ex. n ≤ 10)
 */

/**
 * ✅ 백트래킹 (Backtracking)이란?
 * 가능한 모든 경우를 시도하되, 조건에 맞지 않는 경우는 더 이상 탐색하지 않고 돌아가는 전략이야.
 * 
 * 예시 상황
 * 우리가 1부터 3까지의 숫자를 이용해 순열을 만들고 싶다고 해볼게.
 * 
 * * 가능한 모든 조합: 1-2-3, 1-3-2, 2-1-3, 2-3-1, ...
 * 
 * 진행 순서
 * 
 * ```bash
 * start []
 * → 1 추가 → [1]
 *   → 2 추가 → [1,2]
 *     → 3 추가 → [1,2,3] ← 정답
 *     → 3 제거 → [1,2]
 *   → 2 제거 → [1]
 *   → 3 추가 → [1,3]
 *     → 2 추가 → [1,3,2] ← 정답
 * 이렇게 "시도 → 재귀 호출 → 실패 시 되돌아오기" 흐름을 백트래킹이라고 해.
 * ```
 */

/**
 * 🧩 예제 문제 1: 1부터 N까지의 모든 순열 구하기
 * 📘 입력: 정수 n (1 ≤ n ≤ 8)
 * 📘 출력: 1~n까지 숫자의 모든 순열을 각 줄에 한 개씩 출력
 * 
 * @param { number } n
 */
function solution(n) {
  // 백트래킹 사용하기
  // DFS 로 구현하기

  const result = [];

  const visited = Array.from({
    length: n + 1,
  }, () => false);

  const currentPermuation = [];

  dfs(0);

  return result;

  function dfs(depth) {
    if (depth === n) {
      result.push([...currentPermuation]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      currentPermuation.push(i);

      dfs(depth + 1);

      // 백트래킹
      visited[i] = false;
      currentPermuation.pop();
    }
  }
}

const questions = [
  {
    n: 3,
    answer: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
];

questions.forEach(question => {
  const {
    n,
    answer,
  } = question;

  const result = solution(n);

  console.group('✅ 완전 탐색 개념 요약');
  console.log('n: ', n);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
