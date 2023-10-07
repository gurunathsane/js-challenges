function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) =>
    word
      .split("")
      .reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)
  );

  return words[scores.indexOf(Math.max(...scores))];
}

module.exports = highestScoringWord;
