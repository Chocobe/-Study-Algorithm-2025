/**
 * 🔍 4-2. `In-place` 퀵 정렬 (Quick Sort) 개념 정리
 * 
 * Big O 는 같지만, 공간 복잡도는 더 최적화된 버전
 * 
 * 📌 핵심 개념 요약
 * 개념	설명
 * 💡 정렬 원리	기준(pivot)을 하나 정해, 그보다 작은 값은 왼쪽, 큰 값은 오른쪽으로 분할
 * 🔁 작동 방식	분할 정복(Divide and Conquer) 기법 사용
 * 📦 특징	평균적으로 가장 빠른 정렬 알고리즘 중 하나
 * 🧠 재귀 사용	각 부분을 다시 퀵 정렬 호출하여 정렬
 * 
 * 🧠 작동 순서 (한 줄씩 따라가기)
 * 배열에서 pivot(기준값) 하나를 선택한다. (보통 첫 번째나 마지막 값)
 * 
 * pivot을 기준으로, 작은 값은 왼쪽, 큰 값은 오른쪽 배열로 나눈다.
 * 
 * 분할된 배열에 대해 다시 퀵 정렬을 재귀적으로 실행한다.
 * 
 * 모든 하위 배열이 정렬되면 병합할 필요 없이 정렬이 완료된다.
 * 
 * 예시
 * [5, 3, 7, 6, 2, 9]
 * 
 * pivot: 5
 * → left: [3, 2]
 * → right: [7, 6, 9]
 * 
 * 퀵 정렬 재귀 호출
 * left → [3, 2] → pivot: 3 → [2] + [3]  
 * right → [7, 6, 9] → pivot: 7 → [6] + [7] + [9]
 * 
 * 최종: [2, 3, 5, 6, 7, 9]
 */
function solution(nums) {
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return;
    }

    const pivot = arr[right];
    let i = left;
    let j = right - 1;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }

  const clonedNums = [...nums];
  quickSort(clonedNums);

  return clonedNums;
}

const questions = [
  {
    nums: [5, 3, 7, 6, 2, 9],
    answer: [2, 3, 5, 6, 7, 9],
  },
];

questions.forEach(question => {
  const {
    nums,
    answer,
  } = question;

  const result = solution(nums);

  console.group('4. 퀵 정렬 (Quick Sort) 개념 정리');
  console.log('nums: ', nums);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
