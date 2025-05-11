/**
 * 🧩 문제: "부분 집합의 합"
 * 1부터 N까지의 숫자 집합이 있어.
 * 이 집합의 모든 부분 집합을 구하고,
 * 각 부분 집합의 합을 출력해보자.
 * 
 * 부분 집합의 합에 대한 중복은 제거하기
 */

/**
 * @param { number } n
 */
function solution(n) {
  const numInfos = Array.from({
    length: n,
  }, (_, i) => ({
    value: i + 1,
    isVisited: false,
  }));

  const currentPermutation = [];

  const valueSet = new Set([0]);

  dfs(0);

  return Array
    .from(valueSet)
    .sort((a, b) => a - b);

  function dfs(depth) {
    if (depth >= n) {
      return;
    }

    for (let i = 0; i < numInfos.length; i++) {
      const currentNumInfo = numInfos[i];

      if (currentNumInfo.isVisited) {
        continue;
      }

      numInfos[i].isVisited = true;
      currentPermutation.push(numInfos[i].value);

      const value = currentPermutation.reduce((acc, value) => {
        return acc + value;
      }, 0);

      valueSet.add(value);

      dfs(depth + 1);

      numInfos[i].isVisited = false;
      currentPermutation.pop();
    }
  }
}

const questions = [
  {
    n: 3,
    answer: [0, 1, 2, 3, 4, 5, 6],
  },
];

questions.forEach(question => {
  const {
    n,
    answer,
  } = question;

  const result = solution(n);

  console.group('부분 집합의 합');
  console.log('n: ', n);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
