/**
 * 문제 설명
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
 * 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 */

const CHAR_CODE = {
  a: 'a'.charCodeAt(),
};

/**
 * @param { string } str
 */
function solution(str) {
  return str
    .split('')
    .reduce((answer, char) => {
      return answer + (
        char.charCodeAt() >= CHAR_CODE.a
          ? char.toUpperCase()
          : char.toLowerCase()
      );
    }, '');
}

/**
 * @param { string } str
 */
function solution2(str) {
  return str
    .split('')
    .reduce((answer, char) => {
      const lowerCaseChar = char.toLowerCase();

      return answer + (char === lowerCaseChar
        ? char.toUpperCase()
        : lowerCaseChar
      );
    }, '');
}

const questions = [
  {
    params: {
      str: 'aBcDeFg',
    },
    answer: 'AbCdEfG',
  },
];

questions.forEach(question => {
  const {
    params: {
      str,
    },
    answer,
  } = question;

  console.log(solution2(str) === answer);
});
