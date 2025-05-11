/**
 * 🧩 문제 3: 가장 자주 등장한 숫자 찾기
 * 
 * 📄 설명:
 * 주어진 배열에서 가장 자주 등장하는 숫자를 찾아라.
 * 동일한 빈도의 숫자가 여러 개일 경우, 가장 작은 숫자를 반환하라.
 * 
 * 예시
 * [1, 3, 2, 3, 1, 1, 4, 2, 2] → 1
 * 
 * [5, 5, 6, 6, 7] → 5 (5와 6이 동일 빈도, 더 작은 값 반환)
 * 
 * @param { number[] } nums
 */
function solution(nums) {
  const countMapper = {};
  const maxState = {
    num: null,
    count: 0,
  };

  nums.forEach(num => {
    if (countMapper[num]) {
      countMapper[num]++;
    } else {
      countMapper[num] = 1;
    }

    if (maxState.num === null) {
      maxState.num = num;
      maxState.count = 1;
    } else if (maxState.count <= countMapper[num] && maxState.num > num) {
      maxState.num = num;
      maxState.count = countMapper[num];
    }
  });

  return maxState.num;
}

const questions = [
  {
    nums: [1, 3, 2, 3, 1, 1, 4, 2, 2],
    answer: 1,
  },
  {
    nums: [5, 5, 6, 6, 7],
    answer: 5,
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('3, 가장 자주 등장한 숫자 찾기');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
