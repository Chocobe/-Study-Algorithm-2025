/**
 * 병합 정렬 (Merge Sort)
 * 
 * 배열을 반으로 쪼개서 정렬한 후, 다시 합치는 방식
 * => "분할 정복(Divide & Conquer)" 기법 사용
 * => 퀵 정렬과 다르게 항상 O(n log n) 보장
 * 
 * @param { number[] } arr
 * @returns { number[] }
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  return merge(sortedLeftArr, sortedRightArr);
}

/**
 * @param { number[] } leftArr
 * @param { number[] } rightArr
 * @returns { number[] }
 */
function merge(leftArr, rightArr) {
  const mergedArr = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftValue = leftArr[leftIndex];
    const rightValue = rightArr[rightIndex];

    if (leftValue < rightValue) {
      mergedArr.push(leftValue);
      leftIndex++;
    } else if (leftValue > rightValue) {
      mergedArr.push(rightValue);
      rightIndex++;
    } else {
      mergedArr.push(leftValue, rightValue);
      leftIndex++;
      rightIndex++;
    }
  }

  return [
    ...mergedArr,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

const questions = [
  {
    arr: [5, 3, 8, 1, 2, 7],
    answer: [1, 2, 3, 5, 7, 8],
  },
];

questions.forEach(({ arr, answer }) => {
  const mergedArr = mergeSort(arr);

  console.log('입력: ', arr);
  console.log('정렬 결과: ', mergedArr);
  console.log('정답 결과: ', JSON.stringify(mergedArr) === JSON.stringify(answer));
});
