function validAnagrams(str1, str2) {
  const frequency1 = str1.split("").reduce((f, letter) => {
    f[letter] = (f[letter] || 0) + 1;
    return f;
  }, {});

  const frequency2 = str2.split("").reduce((f, letter) => {
    f[letter] = (f[letter] || 0) + 1;
    return f;
  }, {});

  return (
    Object.keys(frequency1).every(
      (char) => frequency1[char] === frequency2[char]
    ) &&
    Object.keys(frequency2).every(
      (char) => frequency1[char] === frequency2[char]
    )
  );
}

module.exports = validAnagrams;
