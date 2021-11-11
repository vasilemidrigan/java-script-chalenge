//                                JavaScript Chalenge

// Coding challenge #1: Print numbers from 1 to 10
for (let i = 1; i < 11; i++) {
  console.log(i);
}
console.log("Coding challenge #1: Print numbers from 1 to 10");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// Coding challenge #2: Print the odd numbers less than 100
for (let i = 0; i < 50; i++) {
  console.log(2 * i + 1);
}
console.log("Coding challenge #2: Print the odd numbers less than 100");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// Coding challenge #3: Print the multiplication table with 7
for (i = 1; i <= 10; i++) {
  let seven = 7;
  let result = seven * i;
  console.log(`${seven} x ${i} = ${result}`);
}
console.log("Coding challenge #3: Print the multiplication table with 7");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
for (i = 1; i <= 10; i++) {
  let result = 1 * i;
  console.log(`1 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 2 * i;
  console.log(`2 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 3 * i;
  console.log(`3 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 4 * i;
  console.log(`4 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 5 * i;
  console.log(`5 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 6 * i;
  console.log(`6 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 7 * i;
  console.log(`7 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 8 * i;
  console.log(`8 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 9 * i;
  console.log(`9 x ${i} = ${result}`);
}
for (i = 1; i <= 10; i++) {
  let result = 10 * i;
  console.log(`10 x ${i} = ${result}`);
}
console.log(
  "Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10"
);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
let sumOneToTen = 0;
for (let i = 1; i <= 10; i++) {
  sumOneToTen += i;
}
console.log(`The sum of numbers from 1 to 10 is: ${sumOneToTen}`);

console.log("Coding challenge #5: Calculate the sum of numbers from 1 to 10");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//  Coding challenge #6: Calculate 10!
//  Don't really understood what it mean by calculate 10, so I skiped this step.

//  Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

const odd = [];
const sum = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 10; i <= 30; i++) {
  if (i % 2 === 1) {
    odd.push(i);
  }
}

const sumOddNrs = odd.reduce(sum);
console.log(`The sum of odd numbers from 10 to 30 is - ${sumOddNrs}`);

console.log(
  "Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30"
);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

const celsiusToFahrenheit = (celsiusValue) => {
  return celsiusValue * (9 / 5) + 32;
};

celsiusToFahrenheit(30);

console.log(
  "Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit"
);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

const fahrToCelsius = (fahrValue) => {
  return (fahrValue - 32) * (5 / 9);
};

console.log(fahrToCelsius(10));

console.log(
  "Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius"
);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//Coding challenge #10: Calculate the sum of numbers in an array of numbers

const arrOfNum = [3, 7, 2.3, 8];
let sumArr = 0;

for (let i = 0; i <= arrOfNum.length - 1; i++) {
  sumArr += arrOfNum[i];
}

console.log(sumArr); // 20.3

console.log(
  "Coding challenge #10: Calculate the sum of numbers in an array of numbers"
);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

const arr = [1, 5, 7, 9]; //5.25
let sumX = 0;
for (const el of arr) {
  sumX += el;
}
const average = sumX / arr.length;

console.log(
  "Coding challenge #11: Calculate the average of the numbers in an array of numbers"
);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxx S  O  L  V  E  D xxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
