/**
 * 문제: _문제_
 * 
 * 난이도: _Level _
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://
 * 
 * @param { number[] } properties
 * @param { number } location
 * @returns { number }
 */
export function solution(properties, location) {
  const locations = properties.map((_, i) => i);

  let order = 0;

  while (properties.length) {
    const maxProperty = Math.max(...properties);

    const currentProperty = properties.shift();
    const currentLocation = locations.shift();

    if (currentProperty === maxProperty) {
      order++;

      if (currentLocation === location) {
        return order;
      }
    } else {
      properties.push(currentProperty);
      locations.push(currentLocation);
    }
  }
};
