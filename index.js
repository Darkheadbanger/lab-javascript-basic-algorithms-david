// Iteration 1: Names and Input
const hacker1 = "BarabasA";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Baraba";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let isThisNameLonger = 0;
if (hacker1.length === hacker2.length) {
  isThisNameLonger = `Wow, you both have equally long names, ${hacker1.length} characters!`;
} else if (hacker1.length > hacker2.length) {
  isThisNameLonger = `The driver has the longest name, it has ${hacker1.length} characters`;
} else {
  isThisNameLonger = `It seems that the navigator has the longest name, it has XX characters.`;
}

console.log(isThisNameLonger);

// Iteration 3: Loops
let eachCharacters = "";
for (let i = 0; i < hacker1.length; i++) {
  eachCharacters += (hacker1[i] + " ").toUpperCase();
}
console.log(eachCharacters);

let reservedEachCharacters = "";
for (let i = eachCharacters.length; i >= 0; i--) {
  reservedEachCharacters += eachCharacters[i] - 1;
}

// Hereeeee
// const normalOrder = [hacker1, hacker2];
// let lexicographicOrder = Array.from(normalOrder[0]).sort();
// let sortedLexicographicOrder = "";
// let comparaison = "";
// let comparaison2 = "";
let result = "";
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i] < hacker2[i]) {
    result = "The driver's name goes first.";
    break;
  } else if (hacker1[i] > hacker2[i]) {
    result = "Yo, the navigator goes first, definitely.";
    break;
  }
  // If characters are equal, continue to next iteration (no else needed)
}

// If we finished the loop without breaking, all compared characters were equal
// Now we need to check the lengths to determine the final result

// Learn this
// console.log(hacker2.localeCompare(hacker1))

if (result === "") {
  if (hacker1.length < hacker2.length) {
    result = "The driver's name goes first.";
  } else if (hacker1 > hacker2.length) {
    result = "Yo, the navigator goes first, definitely.";
  } else {
    result = "What?! You both have the same name?";
  }
}

console.log("Our result", result);

// Solution without loop

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`${hacker1} The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`${hacker2} Yo, the navigator goes first, definitely.`);
} else {
  console.log("What?! You both have the same name?");
}