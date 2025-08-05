/**
 * 🧠 1. 계수 정렬(Counting Sort) 개념 요약
 * 
 * 항목	설명
 * 📌 핵심 아이디어	각 숫자가 몇 번 나왔는지 "세는 방식" 으로 정렬
 * 🔁 비교 없음	O(n log n)이 아닌 O(n) 가능! (단, 전제 조건 있음)
 * 💡 전제 조건	정수, 범위가 제한된 값에만 적합 (ex. 0~100 정수)
 * 🚫 단점	범위가 크면 메모리 낭비 심함
 * 
 * 📘 동작 예시
 * 입력 배열: [5, 1, 4, 3, 1, 4, 2]
 * 최댓값 파악 → max = 5
 * 
 * 카운트 배열 생성
 * → 길이 max+1 짜리 배열 생성: [0, 0, 0, 0, 0, 0]
 * 
 * 빈도 세기
 * → [0, 2, 1, 1, 2, 1] ← (숫자 1이 2번, 4가 2번, ...)
 * 
 * 정렬 결과 생성
 * → [1, 1, 2, 3, 4, 4, 5]
 * 
 * @param { number[] } nums
 */
function solution(nums) {
  const max = Math.max(...nums);
  const countingArr = Array.from(
    { length: max + 1 },
    () => 0
  );

  nums.forEach(num => {
    countingArr[num]++;
  });

  const sortedArr = [];
  countingArr.forEach((count, num) => {
    if (count === null) {
      return;
    }

    sortedArr.push(...Array.from(
      { length: count },
      () => num
    ));
  });

  return sortedArr;
}

const questions = [
  {
    nums: [5, 1, 4, 3, 1, 4, 2],
    answer: [1, 1, 2, 3, 4, 4, 5],
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('1. 계수 정렬(Counting Sort) 개념 요약');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
