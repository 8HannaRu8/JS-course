let playerOne = `rock`;
let computer = `paper`;
let reply;

if (playerOne === computer) {
  reply = `tie game`;
} else if (playerOne === `rock`) {
  if (computer === `paper`) {
    reply = `computer wins`;
  } else {
    reply = `playerOne wins`;
  }
} else if (playerOne === `paper`) {
  if (computer === `scissors`) {
    reply = `computer wins`;
  } else {
    reply = `playerOne wins`;
  }
} else if (playerOne === `scissors`) {
  if (computer === `rock`) {
    reply = `computer wins`;
  } else {
    reply = `playerOne wins`;
  }
}

console.log(reply);
