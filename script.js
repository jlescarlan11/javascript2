const one = "Hello";
const two = "how are you";
const joined = `${one}, ${two}?`;
console.log(joined);
console.log(one + ", " + two + "?");
console.log(`${one}, ${two}?`);
console.log("------------------");

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;

const output = `I like the sone ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%`;

console.log(output);

console.log("------------------");

// const newline = `One day
// you will
// know me`;

// console.log(newline);

console.log("------------------");

const newline = "One day\nyou will\nknow me";

console.log(newline);

let text = "Apple, Banana, Kiwi";

let part = text.slice(-4, -3);

document.getElementById("demo").innerHTML = part;

let str = "Apple, Banana, Kiwi";
part = str.substr(-4, 3);

document.getElementById("demo1").innerHTML = part;

let text1 = "Hello World!";
let text2 = text1.toUpperCase();

let text3 = text1.concat(" or ", text2);
document.getElementById("demo2").innerHTML = text3;

text1 = "               Helllo Worrld!                 ";
text2 = text1.trimEnd();

document.getElementById("demo3").innerHTML = text2;

text = "5";
let padded = text.padStart(4, "0");
document.getElementById("demo4").innerHTML = padded;

console.log("---------------------");

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
  //   alert("true");
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

console.log("----------------------");
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
