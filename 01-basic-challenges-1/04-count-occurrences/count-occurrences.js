// function countOccurrences(str, char) {
//   let occurrence = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       occurrence++;
//     }
//   }
//   return occurrence;
// }

function countOccurrences(str, char) {
  let arr = str.split(char);
  return arr.length - 1;
}

module.exports = countOccurrences;
