/**
 * NOTE: Quick Sort (퀵 정렬)
 * => 배열에서 기준으로 사용하고 싶은 pivot number 를 선택한다.
 * => pivot 을 기준으로 작은값은 왼쪽, 큰 값은 오른쪽 배열로 옮긴다.
 * => 분할한 배열에 대하여, 재귀 호출한다.
 * => 배열의 길이가 0 ~ 1 이라면, 정렬된 상태이므로, Base Case 로 잡는다.
 * => [..왼쪽, pivot, ...오른쪽] 순서로 병합하여 Quick Sort 가 완료된다.
 */

/**
 * FIXME: 내가 푼 방식은 Space complexity 가 높다는 문제가 있다.
 * => left, right 를 매번 새로운 배열로 만들기 때문이다.
 */

/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function quickSort(arr) {
  // (Base Case) arr.length < 2 라면,
  if (arr.length < 2) {
    // arr 반환하기
    return arr;
  }

  // pivot 선택하기
  const pivot = arr[0];
  // left 배열 생성하기
  let left = [];
  // right 배열 생성하기
  let right = [];

  // arr 를 순회하며,
  for (let i = 1; i < arr.length; i++) {
    // arr[i] < pivot 이라면,
    if (arr[i] < pivot) {
      // left 에 push 하기
      left.push(arr[i]);
    }
    // 아니라면,
    else {
      // right 에 push 하기
      right.push(arr[i]);
    }
  }

  // left 에 대하여 재귀 호출하기
  left = quickSort(left);
  // right 에 대하여 재귀 호출하기
  right = quickSort(right);

  // left, pivot, right 병합하여 반환하기
  return [
    ...left,
    pivot,
    ...right
  ];
};
