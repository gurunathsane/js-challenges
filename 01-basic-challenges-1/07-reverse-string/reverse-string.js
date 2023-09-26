// Solution 1
// function reverseString(str) {
//   let retStr = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     retStr += str[i];
//   }
//   return retStr;
// }

// Solution 2
const reverseString = (str )=> str.split('').reverse().join(''); 
module.exports = reverseString;
