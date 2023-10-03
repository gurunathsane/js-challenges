function fizzBuzzArray(num) {
  let retArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      retArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      retArr.push("Buzz");
    } else if (i % 3 === 0) {
      retArr.push("Fizz");
    } else {
      retArr.push(i);
    }
  }
  return retArr;
}

module.exports = fizzBuzzArray;
