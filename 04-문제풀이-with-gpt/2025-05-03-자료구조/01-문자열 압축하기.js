/**
 * 🧩 문제 1: 문자열 압축하기
 * 
 * 📄 설명:
 * 주어진 문자열에서 연속으로 반복되는 문자를 압축하세요.
 * 
 * 예) "aaabbccccd" → "a3b2c4d1"
 * 
 * @param { string } input
 */
function solution(input) {
  const compressList = [];

  for (let char of input) {
    const lastChar = compressList[compressList.length - 1]?.key;

    if (lastChar === char) {
      compressList[compressList.length - 1].count++;
    } else {
      compressList.push({
        key: char,
        count: 1,
      });
    }
  }

  return compressList.reduce((acc, item) => {
    const {
      key,
      count,
    } = item;

    return acc + `${key}${count}`;
  }, '');
}

const questions = [
  {
    input: 'aaabbccccd',
    answer: 'a3b2c4d1',
  },
];

questions.forEach(question => {
  const {
    input,
    answer,
  } = question;

  const result = solution(input);

  console.group('1. 문자열 압축하기');
  console.log('input: ', input);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
