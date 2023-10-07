function validatePassword(password) {
  password = password.split("");

  const isEightCharLong = password.length >= 8 ? true : false;
  
  const hasUpperCase = password.some(
    (char) => char === char.toUpperCase() && char !== char.toLowerCase()
  );
  
  const hasLowerCase = password.some(
    (char) => char !== char.toUpperCase() && char === char.toLowerCase()
  );

  const hasNumber = password.some((char) => !isNaN(parseInt(char)));

  return isEightCharLong && hasLowerCase && hasUpperCase && hasNumber;
}

module.exports = validatePassword;
