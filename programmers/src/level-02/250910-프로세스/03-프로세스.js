/**
 * @param { number[] } properties
 * @param { number } location
 * @returns { number }
 */
export function solution(properties, location) {
  const queue = properties.map((property, location) => ({
    property,
    location,
  }));

  let maxProperty = 0;
  const propertyCountMap = properties.reduce((map, property) => {
    maxProperty = Math.max(maxProperty, property);
    map[property] = ++map[property] || 1;

    return map;
  }, {});

  let order = 0;

  while (queue.length) {
    while (maxProperty > 0 && !propertyCountMap[maxProperty]) {
      maxProperty--;
    }

    const node = queue.shift();

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
}