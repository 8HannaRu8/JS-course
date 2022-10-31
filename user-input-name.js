let yourName = prompt(`Please, enter your name.`);
if (yourName) {
  console.log(yourName.length);
  console.log(yourName.trim().length);
  console.log(yourName.trim());
} else {
  console.log(`You didn't enter your name.`);
}
