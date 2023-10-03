function findMissingNumber(arr) {
  let n = arr.length + 1;
  let arrSum = (n * (n + 1)) / 2;
  let inputSum = 0;
  for (let i = 0; i < arr.length; i++) {
    inputSum += arr[i];
  }
  return arrSum - inputSum;
}

module.exports = findMissingNumber;
