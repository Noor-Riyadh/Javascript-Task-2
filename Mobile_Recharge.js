// 7) Mobile Recharge
// Recharge mobile balance:
// - Enter amount
// - Apply 2% service fee
// - Add 14% VAT
// Example: 100 → Fee +2 =102 → VAT=116.28

let amount = +prompt("Enter the amount");
document.writeln("So your amount is " + amount + " <br>");
let service_fee = (2 / 100) * amount;
document.writeln("The 2 % is " + service_fee + " <br>");
amount += service_fee;
document.writeln("The Total is now " + amount + " <br>");
let Vat = (14 / 100) * amount;
amount += Vat;
document.writeln("Your total Now after adding 14 % is " + amount + " <br>");
