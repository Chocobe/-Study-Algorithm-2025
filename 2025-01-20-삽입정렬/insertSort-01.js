/**
 * Insert Sort (삽입 정렬)
 * 
 * 1. 0번 요소는 정렬된 것으로 간주
 * 
 * 2. 1번 요소와 0번 요소와 비교
 * 2-1. `0번 > 1번` 이라면 0번과 1번 요소를 교체
 * 2-2. 아니라면, 제자리
 * 
 * 3. 2번 요소를 1번 요소와 비교
 * 3-1. `1번 > 2번` 이라면 1번과 2번 요소를 교체
 * 3-2. 아니라면, 제자리
 * 
 * ... 마지막 요소까지 반복하기
 * 
 * @param { number[] } arr
 */
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let targetIndex = i - 1;

    while (targetIndex >= 0 && currentValue < arr[targetIndex]) {
      arr[targetIndex + 1] = arr[targetIndex];
      targetIndex--;
    }

    arr[targetIndex + 1] = currentValue;
  }

  return arr;
}

const questions = [
  {
    arr: [5, 3, 8, 1, 2],
    answer: [1, 2, 3, 5, 8],
  },
];

questions.forEach(({ arr, answer }) => {
  const isCorrect = insertSort(arr).every((value, i) => value === answer[i]);
  console.log(isCorrect);
});
