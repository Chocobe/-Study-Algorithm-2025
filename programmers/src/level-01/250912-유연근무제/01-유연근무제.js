/**
 * @param { number[] } schedules
 * @param { number[][] } timelogs
 * @param { number } startday
 * @returns { number }
 */
export function solution(schedules, timelogs, startday) {
  let result = 0;

  for (let i = 0; i < schedules.length; i++) {
    const limitMinutes = parseToMinutes(schedules[i]) + 10;

    const isPassed = timelogs[i].every((timelog, j) => {
      const currentDay = (startday + j) % 7;

      if (currentDay === 0 || currentDay === 6) {
        return true;
      }

      return parseToMinutes(timelog) <= limitMinutes;
    });

    if (isPassed) {
      result++;
    }
  }

  return result;
};

function parseToMinutes(value) {
  const hours = Math.floor(value / 100);
  const minutes = value % 100;

  return hours * 60 + minutes;
}
