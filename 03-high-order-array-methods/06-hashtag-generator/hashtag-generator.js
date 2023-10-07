function generateHashtag(str) {
  const hashtag = str
    .trim()
    .split(" ")
    .reduce(
      (tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1),
      "#"
    );

  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
