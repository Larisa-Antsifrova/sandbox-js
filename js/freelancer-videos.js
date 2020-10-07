console.log("Freelancer. Video 1.");
console.log("Here I come :)");

console.log("Freelancer. Video 2.");
console.log("I learn JS.");

console.log("Freelancer. Video 3.");
let userEyesColor;
let user;
let userName = "Vasya";
user = userName;
console.log(user);

if (true) {
  var size = 5;
}
console.log(size);

console.log("Freelancer. Video 4.");
let userSize = "45" / "8";
console.log(typeof userSize);

console.log("Freelancer. Video 5.");

// Variant 1
console.log("35" + -"22"); // '35-22' - wrong
// Variant 2
console.log("35" * "22"); // 770 - correct
// Variant 3
// console.log("558" > 22++); // error
// Variant 4
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers); //0 - wrong
// Variant 5
console.log((!false && 11) || (18 && !"")); // 11 - wrong
// Variant 6
let name = 0;
console.log(name ?? "No name"); //0
