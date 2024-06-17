// const one = "Hello";
// const two = "how are you";
// const joined = `${one}, ${two}?`;
// console.log(joined);
// console.log(one + ", " + two + "?");
// console.log(`${one}, ${two}?`);
// console.log("------------------");

// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;

// const output = `I like the sone ${song}. I gave it a score of ${
//   (score / highestScore) * 100
// }%`;

// console.log(output);

// console.log("------------------");

// // const newline = `One day
// // you will
// // know me`;

// // console.log(newline);

// console.log("------------------");

// const newline = "One day\nyou will\nknow me";

// console.log(newline);

// let text = "Apple, Banana, Kiwi";

// let part = text.slice(-4, -3);

// document.getElementById("demo").innerHTML = part;

// let str = "Apple, Banana, Kiwi";
// part = str.substr(-4, 3);

// document.getElementById("demo1").innerHTML = part;

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();

// let text3 = text1.concat(" or ", text2);
// document.getElementById("demo2").innerHTML = text3;

// text1 = "               Helllo Worrld!                 ";
// text2 = text1.trimEnd();

// document.getElementById("demo3").innerHTML = text2;

// text = "5";
// let padded = text.padStart(4, "0");
// document.getElementById("demo4").innerHTML = padded;

// console.log("---------------------");

// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
//   //   alert("true");
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// console.log("----------------------");
// const areEqualInUpperCase = (str1, str2) =>
//   str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("ß", "ss"); // true; should be false
// areEqualInLowerCase("ı", "I"); // false; should be true

// const select = document.querySelector("#weather");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === "sunny") {
//     para.textContent =
//       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//   } else if (choice === "rainy") {
//     para.textContent =
//       "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//   } else {
//     para.textContent = "";
//   }
// }

const select1 = document.querySelector("#theme");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select1.addEventListener("change", () =>
  select1.value === "black"
    ? update("black", "white")
    : update("white", "black")
);

// let ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

let add7 = (num) => num + 7;
let multiply = (num1, num2) => num1 * num2;
let capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

let lastLetter = (str) => {
  return str.charAt(str.length - 1);
};

// alert(add7(5));
// alert(multiply(2, 5));
// alert(capitalize("lester"));
alert(lastLetter("lester"));
