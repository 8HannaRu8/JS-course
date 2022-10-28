let playerOne = scissors;
let computer = scissors;

if (playerOne === computer) {
  computer = `tie game`;
  playerOne = `tie game`;
} else if (playerOne === rock) {
  if (computer === paper) {
    computer = `wins`;
  } else {
    playerOne = `wins`;
  }
} else if (playerOne === paper) {
  if (computer === scissors) {
    computer = `wins`;
  } else {
    playerOne = `wins`;
  }
} else if (playerOne === scissors) {
  if (computer === rock) {
    computer = `wins`;
  } else {
    playerOne = `wins`;
  }
}

console.log(computer, playerOne);
