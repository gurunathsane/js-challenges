function removeDuplicates(arr) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!retArr.includes(arr[i])) {
      retArr.push(arr[i]);
    }
  }
  return retArr;
}

module.exports = removeDuplicates;
