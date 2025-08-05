/**
 * 🧩 문제: 떡볶이 떡 자르기
 * 📘 문제 설명
 * 손님이 원하는 떡의 길이: target (예: 6)
 * 
 * 다양한 길이의 떡이 담긴 배열이 있어: lengths = [19, 15, 10, 17]
 * 
 * 떡볶이 떡 절단기(H)를 이용해 자르면, H보다 긴 떡은 잘리고, 짧으면 그대로야
 * 
 * 자른 뒤의 떡 길이 합이 target 이상이 되도록 절단기 높이 H를 최대한 높게 설정하고 싶어!
 * 
 * ✅ 출력
 * 조건을 만족하는 절단기 높이 H의 최댓값을 출력하라
 * 
 * 💡 예시
 * lengths = [19, 15, 10, 17]
 * target = 6
 * → 출력: 15
 */

/**
 * @param { number[] } lengths
 * @param { number } target
 */
function solution(lengths, target) {
  let left = 1;
  let right = Math.max(...lengths);
  let maxH = -1;

  while (left <= right) {
    const h = Math.floor((left + right) / 2);

    const remainingLength = lengths.reduce((acc, value) => {
      const remaining = value > h
        ? value - h
        : 0;

      return acc + remaining;
    }, 0);

    if (remainingLength >= target) {
      maxH = Math.max(h, maxH);
      left = h + 1;
    } else {
      right = h - 1;
    }
  }

  return maxH;
}

const questions = [
  {
    lengths: [19, 15, 10, 17],
    target: 6,
    answer: 15,
  },
];

questions.forEach(question => {
  const {
    lengths,
    target,
    answer,
  } = question;

  const result = solution(lengths, target);

  console.group('문제: 떡볶이 떡 자르기');
  console.log('lengths: ', lengths);
  console.log('target: ', target);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
