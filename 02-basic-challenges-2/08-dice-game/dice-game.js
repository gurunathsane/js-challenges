function diceGameSimulation(num) {
  let retArr = [];
  for (let i = 0; i < num; i++) {
    const dice1 = Math.floor(Math.random() * 5) + 1;
    const dice2 = Math.floor(Math.random() * 5) + 1;
    const sum = dice1 + dice2;
    let result = "";
    switch (sum) {
      case 7:
      case 11:
        result = "win";
        break;
      case 2:
      case 3:
      case 12:
        result = "lose";
        break;
      default:
        result = "roll again";
    }
    retArr.push({ dice1: dice1, dice2: dice2, sum: sum, result: result });
  }
  return retArr;
}

module.exports = diceGameSimulation;
