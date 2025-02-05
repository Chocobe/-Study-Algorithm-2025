/**
 * 쿽 정렬 (Quick Sort)
 * 
 * 기준이 되는 하나의 값(피벗, Pivot)을 정하고, 작은 값은 왼쪽, 큰 값은 오른쪽으로 정렬하는 방식
 * => "분할 정복(Divide & Conquer)" 기법 사용
 * => 정렬 속도가 빠르며, 평균적으로 O(n log n)의 성능을 가짐
 * => 위 과정을 처리하는 함수를 재귀로 호출
 * 
 * 정렬 과정
 * 1. 기준값 선정 (pivot)
 * 2. 기준값보다 작으면 left 배열에 저장, 크면 right 배열에 저장
 * 3. 위 과정을 함수로 정의하여, left 배열과 right 배열도 재귀 호출
 * 
 * @param { number[] } arr
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const leftArr = arr.filter(value => value < pivot);
  const middleArr = arr.filter(value => value === pivot);
  const rightArr = arr.filter(value => value > pivot);

  return [
    ...quickSort(leftArr),
    ...middleArr,
    ...quickSort(rightArr),
  ];
}

const questions = [
  {
    arr: [5, 3, 8, 1, 2, 7],
    answer: [1, 2, 3, 5, 7, 8],
  },
];

questions.forEach(({ arr, answer }) => {
  const sortedArr = quickSort(arr);

  console.log('입력: ', arr);
  console.log('정렬 결과: ', sortedArr);
  console.log('정답 결과: ', JSON.stringify(sortedArr) === JSON.stringify(answer));
});
