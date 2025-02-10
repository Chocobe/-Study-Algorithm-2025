/**
 * 이진 탐색 (Binary Search)
 * => 이진 탐색은 `정렬된 배열` 에서 특정 값을 빠르게 찾는 알고리즘 입니다.
 * => O(N) 시간이 걸리는 선형 탐색(Linear Search) 대신, O(log N) 시간 복잡도로 훨씬 빠르게 값을 찾을 수 있어!
 * 
 * 탐색 과정
 * 1. `정렬된 배열` 에서 가운데 값(mid) 를 선택
 * 2. `target < mid` 라면, mid 기준 왼쪽 배열을 `이진 탐색 (재귀)`
 * 3. `target > mid` 라면, mid 기준 오른쪽 배열을 `이진 탐색 (재귀)`
 * 
 * @param {{
 *  arr: number[];
 *  target: number[];
 *  leftIndex?: number;
 *  rightIndex?: number;
 * }} params
 */
function solution(params) {
  const {
    arr,
    target,
    leftIndex = 0,
    rightIndex = arr.length - 1,
  } = params;

  if (leftIndex > rightIndex) {
    return -1;
  }

  const midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target < arr[midIndex]) {
    return solution({
      arr,
      target,
      leftIndex,
      rightIndex: midIndex - 1,
    });
  } else if (target > arr[midIndex]) {
    return solution({
      arr,
      target,
      leftIndex: midIndex + 1,
      rightIndex,
    });
  } else if (target === arr[midIndex]) {
    return midIndex;
  } else {
    return -1;
  }
}

const questions = [
  {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    target: 3,
    answer: 2,
  },
  {
    arr: [10, 20, 30, 40, 50],
    target: 25,
    answer: -1,
  },
];

questions.forEach(({ arr, target, answer }) => {
  const result = solution({ arr, target });

  console.log('입력 - [arr, target]: ', [arr, target]);
  console.log('탐색 결과: ', result);
  console.log('정답 결과: ', result === answer);
  console.log('\n');
});
