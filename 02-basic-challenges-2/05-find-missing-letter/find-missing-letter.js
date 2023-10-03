function findMissingLetter(arr) {
  let firstCharCode = arr[0].charCodeAt(0);
  for (i = 1; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== firstCharCode + i) {
      return String.fromCharCode(firstCharCode + i);
    }
  }
  return "";
}

module.exports = findMissingLetter;
