/**
 * ✅ 문제 5: 두 배열의 교집합을 구하라
 * 
 * 📌 입력: [1, 2, 2, 3] & [2, 2, 4]
 * 📌 출력: [2]
 * 
 * @param { number[] } nums1
 * @param { number[] } nums2
 */
function solution(nums1, nums2) {
  const numsSet1 = new Set(nums1);
  const numsSet2 = new Set(nums2);

  const answer = [];

  numsSet2.forEach(num2 => {
    if (numsSet1.has(num2)) {
      answer.push(num2);
    }
  });

  return answer;
}

const questions = [
  {
    nums1: [1, 2, 2, 3],
    nums2: [2, 2, 4],
    answer: [2],
  },
];

questions.forEach(question => {
  const {
    nums1,
    nums2,
    answer,
  } = question;

  const result = solution(nums1, nums2);

  console.group('두 배열의 교집합을 구하라');
  console.log('nums1: ', nums1);
  console.log('nums2: ', nums2);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
