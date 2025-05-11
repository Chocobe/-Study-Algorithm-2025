/**
 * 🧠 07. 보너스 심화 문제: Top K 빈도 요소 찾기
 * 
 * 🧩 문제
 * 주어진 정수 배열에서 가장 자주 등장한 K개의 숫자를 큰 빈도순으로 반환하라.
 * 빈도 수가 같다면 더 작은 숫자가 우선이다.
 * 
 * ✅ 입력
 * nums: 정수 배열
 * 
 * k: 정수 (1 ≤ k ≤ nums.length)
 * 
 * ✅ 출력
 * 가장 자주 등장한 숫자 k개를 배열로 반환
 * 
 * @param { number[] } nums
 * @param { number } k
 */
function solution(nums, k) {
  const countMapper = {};

  nums.forEach(num => {
    if (countMapper[num]) {
      countMapper[num]++;
    } else {
      countMapper[num] = 1;
    }
  });

  return Object
    .entries(countMapper)
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      }

      return a[0] - b[0];
    })
    .map(([num,]) => Number(num))
    .slice(0, k);
}

const questions = [
  {
    nums: [1, 1, 1, 2, 2, 3],
    k: 2,
    answer: [1, 2],
  },
  {
    nums: [4, 4, 4, 5, 5, 6],
    k: 2,
    answer: [4, 5],
  },
];

questions.forEach(question => {
  const {
    nums,
    k,
    answer,
  } = question;

  const result = solution(nums, k);

  console.group('07. 보너스 심화 문제: Top K 빈도 요소 찾기');
  console.log('nums: ', nums);
  console.log('k: ', k);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
