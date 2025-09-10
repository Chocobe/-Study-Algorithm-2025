/**
 * @param { number[] } properties
 * @param { number } location
 * @returns { number }
 */
export function solution(properties, location) {
  let head = 0;
  const queue = properties.map((property, location) => ({
    property,
    location,
  }));

  let maxProperty = Math.max(...properties);
  const propertyCountMap = Array(maxProperty + 1).fill(0);
  properties.forEach(property => {
    propertyCountMap[property]++;
  });

  let order = 0;

  while (head < queue.length) {
    while (maxProperty > 0 && propertyCountMap[maxProperty] === 0) {
      maxProperty--;
    }

    const node = queue[head++];

    if (node.property === maxProperty) {
      order++;
      propertyCountMap[maxProperty]--;

      if (node.location === location) {
        return order;
      }
    } else {
      queue.push(node);
    }
  }
};
