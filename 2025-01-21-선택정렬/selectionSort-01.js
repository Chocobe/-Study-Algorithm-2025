/**
 * @param { number[] } arr
 */
function selectionSort(arr) {
  const copiedArr = [...arr];

  for (let i = 0; i < copiedArr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < copiedArr.length; j++) {
      if (copiedArr[j] < copiedArr[minIndex]) {
        minIndex = j;
      }
    }

    [copiedArr[i], copiedArr[minIndex]] = [copiedArr[minIndex], copiedArr[i]];
  }

  return copiedArr;
}

const questions = [
  {
    arr: [5, 3, 8, 1, 2],
    answer: [1, 2, 3, 5, 8],
  },
];

questions.forEach(({ arr, answer }) => {
  const sortedArr = selectionSort(arr);

  console.log(`입력: ${arr}`);
  console.log(`정렬 결과: ${sortedArr}`);
  console.log(`정답 여부: ${JSON.stringify(sortedArr) === JSON.stringify(answer)}`);
});
