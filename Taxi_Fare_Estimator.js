// 2) Taxi Fare Estimator
// Estimate taxi fare:
// - Base = 20 EGP, Per km = 6.5 EGP
// - Enter kilometers (e.g. 10)
// - Add night surcharge (10%) if confirmed
// - Apply promo code SAVE10 for 10% discount
// - Add 14% VAT
// Example: 20 + (10×6.5)=85 → Night +10%=93.5 → Promo -10%=84.15 → VAT=95.93

let base = 20;
let kilometers = +prompt("Enter kilometers ");
let total = kilometers * 6.5;
total += base;
document.writeln("So your total is " + total + " <br>");
let needSurcharge = confirm("Do you need a  night surcharge ");
if (needSurcharge) {
  let surcharge = (10 / 100) * total;
  total += surcharge;
  document.writeln(
    "So your total price after applying 10 % for night surcharge is  " +
      total +
      " <br>",
  );
}
let havePromocode = confirm("Do you have a promo code ? ");
if (havePromocode) {
  let Promocode = prompt("Enter promo code");
  if (Promocode == "SAVE10") {
    let discount = (10 / 100) * total;
    total -= discount;
    document.writeln(
      "So your total after applying the promocode is " + total + " <br>",
    );
  }
}
let Vat = (14 / 100) * total;
total += Vat;
document.writeln("Your total Now after adding 14 % is " + total + " <br>");
