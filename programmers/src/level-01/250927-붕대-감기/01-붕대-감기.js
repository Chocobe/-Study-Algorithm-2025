/**
 * 문제: _[PCCP 기출문제] 1번 / 붕대 감기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/250137
 * 
 * @param { number[] } bandage
 * @param { number } health
 * @param { number[][] } attacks
 * @returns { number }
 */
export function solution(bandage, health, attacks) {
  const MAX_HEALTH = health;

  for (let i = 0; i < attacks.length; i++) {
    const current = attacks[i];
    health -= current[1];

    if (health < 1) return -1;

    const next = attacks[i + 1];

    if (!next) {
      break;
    }

    const healTime = next[0] - current[0] - 1;
    const amount = (healTime * bandage[1]) + (Math.floor(healTime / bandage[0]) * bandage[2]);
    health = Math.min(health + amount, MAX_HEALTH);
  }

  return health > 0 ? health : -1;
};
