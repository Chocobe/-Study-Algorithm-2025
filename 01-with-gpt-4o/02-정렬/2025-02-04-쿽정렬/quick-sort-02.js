/**
 * @param { number[] } arr
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const leftArr = [];
  const middleArr = [];
  const rightArr = [];

  arr.forEach(value => {
    if (value < pivot) {
      leftArr.push(value);
    } else if (value > pivot) {
      rightArr.push(value);
    } else {
      middleArr.push(value);
    }
  });

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
  {
    arr: [5, 3, 8, 1, 2, 7, 3],
    answer: [1, 2, 3, 5, 7, 8, 3],
  },
];

questions.forEach(({ arr, answer }) => {
  const sortedArr = quickSort(arr);

  console.log('입력: ', arr);
  console.log('정렬 결과: ', sortedArr);
  console.log('정답 결과: ', JSON.stringify(sortedArr) === JSON.stringify(answer));
});
