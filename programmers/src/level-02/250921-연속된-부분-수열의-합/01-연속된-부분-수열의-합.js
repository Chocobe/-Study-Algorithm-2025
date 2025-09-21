/**
 * 문제: _연속된 부분 수열의 합_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * 
 * @param { number[] } sequence
 * @param { number } k
 * @returns { number[] }
 */
export function solution(sequence, k) {
  let sum = sequence[0];
  let left = 0;
  let right = 0;

  const result = {
    left: 0,
    right: sequence.length - 1,
  };

  while (left <= right && right < sequence.length) {
    if (
      sum === k &&
      result.right - result.left > right - left
    ) {
      result.left = left;
      result.right = right;
    }

    if (sum < k) {
      right++;

      if (right >= sequence.length) {
        break;
      }

      sum += sequence[right];
    } else if (sum >= k) {
      sum -= sequence[left];
      left++;
    }
  }

  return [result.left, result.right];
};



/**
 * 두번째 시도 (부분 수열 길이를 늘려가는 방법)
 */
// export function solution(sequence, k) {
//   for (let length = 1; length <= sequence.length; length++) {
//     for (let start = 0; start <= sequence.length - length; start++) {
//       let sum = 0;

//       for (let i = start; i < start + length; i++) {
//         sum += sequence[i];
//       }

//       if (sum > k) {
//         break;
//       }

//       if (sum === k) {
//         return [start, start + length - 1];
//       }
//     }
//   }

//   return [0, sequence.length - 1];
// };



/**
 * 첫번째 시도 (Sliding Window - sum 을 매번 구함)
 */
// export function solution(sequence, k) {
//   const result = {
//     start: 0,
//     end: sequence.length - 1,
//     length: sequence.length,
//   };

//   let left = 0;
//   let right = 0;

//   while (true) {
//     if (
//       left > right ||
//       left >= sequence.length ||
//       right >= sequence.length
//     ) {
//       break;
//     }

//     let sum = 0;

//     for (let i = left; i <= right; i++) {
//       sum += sequence[i];
//     }

//     if (sum < k) {
//       right++;
//     } else {
//       if (sum === k) {
//         const currentLength = right - left + 1;

//         if (currentLength < result.length) {
//           result.start = left;
//           result.end = right;
//           result.length = currentLength;
//         }
//       }

//       left++;
//     }
//   }

//   return [result.start, result.end];
// };
