/**
 * 버블 정렬 (Bubble Sort)
 * 
 * > 인접한 두 개의 값을 비교하면서 큰 값을 뒤로 이동시키는 정렬 알고리즘
 * > => 큰 값이 "거품(Bubble)" 처럼 끝으로 밀려나는 방식
 * 
 * 정렬 과정
 * 1. 배열의 첫 번째 요소부터 인접한 두 개를 비교
 * 2. 더 큰 값을 뒤로 이동 (Swap)
 * 3. 한 번의 순회가 끝나면 가장 큰 값이 맨 뒤에 배치됨
 * 4. 이 과정을 배열의 크기만큼 반복
 * 
 * @param { number[] } arr
 */
function bubbleSort(arr) {
  const clonedArr = [...arr];

  for (let lastIndex = clonedArr.length - 1; lastIndex > 0; lastIndex--) {
    let swaped = false;

    for (let index = 0; index < lastIndex; index++) {
      const leftValue = clonedArr[index];
      const rightValue = clonedArr[index + 1];

      if (leftValue > rightValue) {
        [clonedArr[index], clonedArr[index + 1]] = [clonedArr[index + 1], clonedArr[index]];
        swaped = true;
      }
    }

    if (!swaped) {
      break;
    }
  }

  return clonedArr;
}

const questions = [
  {
    arr: [5, 3, 8, 1, 2],
    answer: [1, 2, 3, 5, 8],
  },
];

questions.forEach(({ arr, answer }) => {
  const sortedArr = bubbleSort(arr);

  console.log('입력: ', arr);
  console.log('정렬 결과: ', sortedArr);
  console.log('정답 결과: ', JSON.stringify(sortedArr) === JSON.stringify(answer));
});
