/**
 * ✅ 이진 탐색 개념 복습 (1분 정리)
 * * 대상: 정렬된 배열
 * * 원리: 중앙값(mid)을 기준으로 좌/우로 반씩 줄이며 탐색
 * * 시간: 복잡도	O(log n)
 */

/**
 * 🎯 예제 문제: "이분 탐색으로 조건을 만족하는 최솟값 구하기"
 * 문제 설명:
 * 길이가 n인 정수 배열이 있어.
 * 이 배열에서 합이 target 이상이 되는 가장 짧은 연속 부분 배열의 길이를 구해줘.
 */

/**
 * @param { number[] } nums
 * @param { number } target
 */
function solution(nums, target) {
  let left = 1;
  let right = nums.length;
  let minCount = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const isPossible = checkIsPossible(mid);

    if (isPossible) {
      // right--;
      right = mid - 1;
      minCount = Math.min(minCount, mid);
    } else {
      // left++;
      left = mid + 1;
    }
  }

  return minCount;

  function checkIsPossible(length) {
    let sum = 0;

    for (let i = 0; i < length; i++) {
      sum += nums[i];
    }

    if (sum >= target) {
      return true;
    }

    // 슬라이딩 윈도우
    for (let i = length; i < nums.length; i++) {
      // sum 을 구성하는 범위를 index 1만큼 이동 시키기
      // sum += `다음 우측값` - `현재 좣측값`
      // => sum 을 구성하는 요소 개수는 동일하지만, 연속된 범위가 한칸 우측으로 이동한 모습이 됨
      sum += nums[i] - nums[i - length];

      if (sum >= target) {
        return true;
      }
    }

    return false;
  }
}

const questions = [
  {
    nums: [2, 3, 1, 2, 4, 3],
    target: 7,
    answer: 2,
  },
];

questions.forEach(question => {
  const {
    nums,
    target,
    answer,
  } = question;

  const result = solution(nums, target);

  console.group('이분 탐색으로 조건을 만족하는 최솟값 구하기');
  console.log('nums: ', nums);
  console.log('target: ', target);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
