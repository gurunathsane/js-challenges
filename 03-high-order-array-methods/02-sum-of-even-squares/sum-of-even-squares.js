const sumOfEvenSquares = (numbers) =>
  numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((sum, num) => (sum = sum + num), 0);

module.exports = sumOfEvenSquares;
