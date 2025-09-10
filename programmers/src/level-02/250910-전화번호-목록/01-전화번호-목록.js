/**
 * 문제: _전화번호 목록_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * 
 * @param { string[] } phoneBook
 * @returns { boolean }
 */
export function solution(phoneBook) {
  // const sortedPhoneBook = phoneBook.sort((a, b) => a - b);
  // const sortedPhoneBook = phoneBook.sort();
  const sortedPhoneBook = phoneBook.sort((a, b) => a.localeCompare(b));

  const hasPrefix = sortedPhoneBook.some((prefix, index) => {
    const nextPhone = sortedPhoneBook[index + 1];

    if (!nextPhone) {
      return false;
    }

    return nextPhone.startsWith(prefix);
  });

  return !hasPrefix;
};
