const isValidIPv4 = (str) => {
  let parts = str.split(".");

  if (parts.length !== 4) return false;

  return parts.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

module.exports = isValidIPv4;
