function areAllCharactersUnique(str) {
  let inputArr = str.split("");
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] === inputArr[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
