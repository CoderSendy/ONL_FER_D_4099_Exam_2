const data = [1, 2, 3, 4, 5];

/**
 * Write your code below!
 */
const without = (data, ...numbersToRemove) => {
  return data.filter(number => !numbersToRemove.includes(number));
};

console.log(without(data, 1, 2));
console.log(without(data, 5, 3));
console.log(without(data, 1, 2, 3, 4));
console.log(without(data));
console.log(without(data, 1, 2, 3, 4, 5));