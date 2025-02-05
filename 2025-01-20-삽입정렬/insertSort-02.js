/**
 * @param { number[] } arr 
 */
function insertSort(arr) {
  const copiedArr = [...arr];

  for (let i = 1; i < copiedArr.length; i++) {
    const insertingValue = copiedArr[i];
    let targetIndex = i - 1;

    while(targetIndex >= 0 && insertingValue < copiedArr[targetIndex]) {
      copiedArr[targetIndex + 1] = copiedArr[targetIndex];
      targetIndex--;
    }

    copiedArr[targetIndex + 1] = insertingValue;
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
  const sortedArr = insertSort(arr);
  console.log(`${arr} => ${JSON.stringify(sortedArr) === JSON.stringify(answer)}`);
});
