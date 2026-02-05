// 8) Fuel Cost
// Calculate fuel cost:
// - Enter liters and price per liter (e.g. 12 EGP)
// - Apply 5% discount if paying cash
// - Add 14% VAT
// Example: 40 liters ×12=480 → Cash -5% =456 → VAT=519.84

let liter = +prompt("Enter number of liters ");
let price = +prompt("Enter Price per Liter ");
let total = liter * price;
document.writeln("So your total price is " + total + " <br>");
let isCash = confirm(" Are you paying Cash or Visa ");
if (isCash) {
  let discount = (5 / 100) * total;
  total -= discount;
  document.writeln(
    "So your total price after applying 5 % discount  " + total + " <br>",
  );
}
let Vat = (14 / 100) * total;
total += Vat;
document.writeln("Your total Now after adding 14 % is " + total + " <br>");
