// 11) Cinema Ticket
// Cinema booking:
// - Ticket price=100 EGP
// - Student discount 15%
// - 3D glasses +20 EGP

// - Add 14% VAT
// Example: Ticket 100 + Glasses 20=120 → Student -15% =102 → VAT=116.28

let price = 100;
let isStudent = confirm("Are you a student ?");
let discount = 0;

let isGlasses = confirm(" Do you Need a 3D glass ?");
if (isGlasses) {
  price += 20;
  document.writeln(
    "Your total Now after adding 20 EGP for the Glasses is " + price + " <br>",
  );
}
discount = (15 / 100) * price;
if (isStudent) {
  price -= discount;
  document.writeln(
    "Your total Now after adding Applying tthe dicount is " + price + " <br>",
  );
}
let Vat = (14 / 100) * price;
price += Vat;
document.writeln("Your total Now after adding 14 % is " + price + " <br>");
