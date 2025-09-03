/**
 * @param { number[][] } arr
 * @returns { number }
 */
export function solution(arr) {
  // 결과 배열: [작은값, 큰값]
  const result = [
    Math.min(arr[0][0], arr[0][1]),
    Math.max(arr[0][0], arr[0][1]),
  ];

  for (let i = 1; i < arr.length; i++) {
    // 현재 사각형 꺼내기
    const current = arr[i];

    // current.w, current.h 둘다 작으면,
    if (current[0] < result[0] && current[1] < result[1]) {
      // 스킵
      continue;
    }

    // current.w < 결과.h && current.h < 현재.w
    if (current[0] < result[1] && current[1] < result[0]) {
      // 스킵
      continue;
    }

    result[0] = Math.max(Math.min(...current), result[0]);
    result[1] = Math.max(Math.max(...current), result[1]);
  }

  // 결과 곱해서 반환하기
  return result[0] * result[1];
};
