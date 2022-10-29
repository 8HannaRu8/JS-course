let costumerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (costumerIsBanned) {
  reply = `No soup for you!`;
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);
