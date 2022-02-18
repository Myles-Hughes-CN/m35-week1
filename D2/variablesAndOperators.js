// Activity 1
let name = 'Chris';
let age = 27;
let favColor = 'Blue';

console.log(`Hi, my name is ${name}. I am ${age} and my favourite color is ${favColor}`);

age = 28;
favColor = 'Emerald';
console.log(`Hi, my name is ${name}. I am ${age} and my favourite color is ${favColor}`);



// Activity 2
let breakfast = "Cereal";
let lunch = "Soup";
let dinner = "Pie";

console.log(`Today I have had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner!`);

breakfast = "Fruit";
lunch = "Omelette";
dinner = "Sushi";

console.log(`Tomorrow I will be having ${breakfast} for breakfast, ${lunch} for lunch and my favourite ${dinner} for dinner! I can't wait!`)

// Activity 3
// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2022,11,05")
const todaysDate = new Date("2022, 02, 15");
// This calculates the difference but IN milliseconds.
let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);
console.log(`Your birthday is in: ${diffInDays} days.`)



// // Activity 4 - Expected Answer
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);



let word = "abba";
if (word.charAt(0) == word.charAt(word.length-1)){
  console.log("True")
} else {
  console.log("False")
}