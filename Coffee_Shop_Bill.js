// 1) Coffee Shop Bill
// Simulate ordering a coffee:
// - Choose size (small=45, medium=55, large=65)
// - Add extras (milk +5, syrup +7, extra shot +10)
// - Apply student discount (20%) if confirmed
// - Add 14% VAT
// Example: Large (65) + Milk (5) = 70 → Student -20% = 56 → VAT 14% = 63.84

document.writeln("Welcome to our Coffee Shop <br>");
let size = prompt(
  "Choose you Coffee size is it small (sm) , medium (md) or large (lg)",
);
document.writeln("So you Choose " + size + "<br>");
let cost = 0;
if (size == "sm") {
  cost += 45;
  document.writeln("You Choose small so you cost will be " + cost + "<br>");
} else if (size == "md") {
  cost += 55;
  document.writeln("You Choose medium so you cost will be " + cost + "<br>");
} else if (size == "lg") {
  cost += 65;
  document.writeln("You Choose Large so you cost will be " + cost + "<br>");
} else {
  alert("You entered a wrong size write it again");
}
let needMilk = confirm("Do you want Extra Milk ? ");
if (needMilk) {
  cost += 5;
  document.writeln(
    "Your cost now increased to " + cost + "as you add extra milk <br>",
  );
}
let needSyrup = confirm("Do you want Extra Syrup ? ");
if (needSyrup) {
  cost += 7;
  document.writeln(
    "Your cost now increased to " + cost + "as you add extra Syrup <br>",
  );
}
let needextrashot = confirm("Do you want Extra Shot ? ");
if (needextrashot) {
  cost += 7;
  document.writeln(
    "Your cost now increased to " + cost + "as you add extra Shot <br>",
  );
}
let isStudent = confirm(" Do you have a student promocode ?");
if (isStudent) {
  let discount = (20 / 100) * cost;
  cost -= discount;
  document.writeln("Your cost after Discount is " + cost);
}

let Vat = (14 / 100) * cost;
cost += Vat;
document.writeln("Now your cost is " + cost + "after adding the 14 % VAT");
