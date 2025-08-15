/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function mergeSort(arr) {
  // (Base Case) arr.length < 2 라면,
  if (arr.length < 2) {
    // 반환하기 (분할 완료)
    return arr;
  }

  // arr 분할하기
  const midIndex = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, midIndex);
  let arr2 = arr.slice(midIndex);

  // 분할된 배열 각각으로 재귀 호출하기
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  // 병합 방식에 따라 병합하여, 반환하기
  return mergeArr(arr1, arr2);
};

/**
 * @param { number[] } arr1
 * @param { number[] } arr2
 */
function mergeArr(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return [
    ...result,
    ...arr1.slice(i),
    ...arr2.slice(j),
  ];
}
