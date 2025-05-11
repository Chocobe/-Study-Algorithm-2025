/**
 * 🧠 5. 병합 정렬 개념 요약
 * 개념	설명
 * 🔁 분할 정복(Divide and Conquer)	배열을 계속 반으로 쪼개서 정렬한 뒤 병합
 * 📦 Stable Sort (안정 정렬)	동일한 값의 순서가 유지돼
 * ⏱ 시간 복잡도	O(n log n) (항상 일정)
 * 📈 공간 복잡도	O(n) (임시 배열 필요)
 * 
 * 📘 동작 흐름 예시
 * [5, 2, 4, 3, 1]
 * 
 * 분할 단계
 * 
 * → [5, 2, 4] / [3, 1]
 * 
 * → [5] [2, 4] / [3] [1]
 * 
 * → [5] [2] [4] / [3] [1]
 * 
 * 병합 단계
 * 
 * [2] + [4] → [2, 4]
 * 
 * [5] + [2, 4] → [2, 4, 5]
 * 
 * [1] + [3] → [1, 3]
 * 
 * 최종 병합: [2, 4, 5] + [1, 3] → [1, 2, 3, 4, 5]
 * 
 * @param { number[] } nums
 */
function solution(nums) {
  if (nums.length < 2) {
    return nums;
  }

  const midIndex = Math.floor(nums.length / 2);
  const leftArr = solution(nums.slice(0, midIndex));
  const rightArr = solution(nums.slice(midIndex));

  // 병합 결과
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 각 index 가 배열 범위 안에 있을때 까지 반복
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    // 좌측 요소가 더 작다면
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      // 병합하기
      mergedArr.push(leftArr[leftIndex]);
      // 다음 index 로 이동
      leftIndex++;

      // 우측 요소가 더 작다면
    } else if (leftArr[leftIndex] > rightArr[rightIndex]) {
      // 병합하기
      mergedArr.push(rightArr[rightIndex]);
      // 다음 index 로 이동
      rightIndex++;
    }
  }

  return [
    // 정렬 및 병합된 배열 요소
    ...mergedArr,
    // 좌측에 남아있는 배열 요소 적용
    ...leftArr.slice(leftIndex),
    // 우측에 남아있는 배열 요소 적용
    ...rightArr.slice(rightIndex),
  ];
}

const questions = [
  {
    nums: [5, 2, 4, 3, 1],
    answer: [1, 2, 3, 4, 5],
  },
];

questions.forEach(({ nums, answer }) => {
  const result = solution(nums);

  console.group('5. 병합 정렬 (Merge Sort)');
  console.log('input: ', nums);
  console.log('result:', result);
  console.log('answer:', answer);
  console.log('pass:', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
