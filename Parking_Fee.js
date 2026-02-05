// 10) Parking Fee
// Calculate parking fee:
// - First 2 hours = 10 EGP total
// - Each extra hour = 5 EGP
// - Add 14% VAT
// Example: 5 hours → 10 + (3×5)=25 → VAT=28.5

let hours = +prompt(" Enter the numbers of Hours ");
let remain = 0;
let first = 10;

if (hours >= 2) {
  remain = hours - 2;
  remain *= 5;
  document.writeln(remain);
  total = first + remain;
  //   document.writeln("Your total Now is " + total + " <br>");
} else {
  total = first;
  document.writeln("Your total Now is " + total + " <br>");
}

let Vat = (14 / 100) * total;
total += Vat;
document.writeln("Your total Now after adding 14 % is " + total + " <br>");
