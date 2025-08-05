/**
 * 🧩 예제 문제 1: 1부터 N까지의 모든 순열 구하기
 * 📘 입력: 정수 n (1 ≤ n ≤ 8)
 * 📘 출력: 1~n까지 숫자의 모든 순열을 각 줄에 한 개씩 출력
 * 
 * @param { number } n
 */
function solution(n) {
  const permutations = [];

  // for (let node = 1; node <= n; node++) {
  //   dfs([node]);
  // }
  dfs([]);

  return permutations;

  function dfs(nodes) {
    for (let node = 1; node <= n; node++) {
      if (nodes.includes(node)) {
        continue;
      }

      const nextNodes = [
        ...nodes,
        node,
      ];

      if (nextNodes.length >= n) {
        permutations.push(nextNodes);

        continue;
      }

      dfs(nextNodes);
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
