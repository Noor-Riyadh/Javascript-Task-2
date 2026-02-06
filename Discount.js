// Requirement:
// If the user enters a **positive** number, it should be treated as an **increase** (surcharge) rather than a discount. If they enter a **negative** number, it should be treated as a **discount**.
// Constraint:
// You must achieve this **without using an `if` condition**. The system should follow the logic of the example provided in the lecture:

// Input
let numbers = parseFloat(prompt("Enter a number"));
let discount = parseFloat(prompt("Enter the dicount"));
console.log(discount);
// Processing
let newdiscount = discount / 100;
let caludiscount = numbers + (numbers * newdiscount);
console.log(caludiscount);
// Output
console.log("The dicount is " + caludiscount);