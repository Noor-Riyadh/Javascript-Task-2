// 6) Exam Grader
// Grade an exam:
// - Enter score (0–100)
// - Bonus +3 points for good attendance
// - Cap at 100
// - Determine grade (A/B/C/D/F)
// - Pass if score >= 50
// Example: Score=48 + Attendance +3 = 51 → Grade=D → Status: PASS

let score = +prompt("Enter Your Score ");
let isAttend = confirm("Do you have a good attendnace ");
if (isAttend) {
  score += 3;
  document.writeln("Your score now is " + score + " <br/>");
}
// Apply the cap
if (score > 100) {
  score = 100;
  document.writeln("Your score now is " + score + " <br/>");
}
// Grades
let grade;
if (score > 90) {
  grade = "A";
} else if (score > 80) {
  grade = "B";
} else if (score > 70) {
  grade = "C";
} else if (score > 60) {
  grade = "D";
} else {
  grade = "F";
}

let status = score > 50 ? "Pass" : "Fail";
document.writeln(
  "Your Grade is " + grade + " and your status is " + status + " <br>",
);
