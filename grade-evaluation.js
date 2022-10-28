let testScore = 89;
let missed = false;
let grade;

if (testScore >= 90) {
  grade = `A`;
} else if (testScore >= 80) {
  grade = `B`;
} else if (testScore >= 60) {
  grade = `C`;
} else {
  if (missed) {
    grade = `unevaluated`;
  } else {
    grade = `F`;
  }
}
console.log(grade);
