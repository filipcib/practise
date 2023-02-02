/*
let country = "Slovakia";
const continent = "Europe";
let population = 5;

let isIsLand = true;
let language;

language = "Slovak";


console.log(country);
console.log(population);
console.log(continent);
console.log(isIsLand);
console.log(language);


console.log(population + 1);
console.log(population > 6);
console.log(country < 33);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese'";

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

------------------------18------------------------
LECTURE: Strings and Template Literals


let country = "Slovakia";
const continent = "Europe";
let population = 5;
let isIsLand = true;
let language = "Slovak";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);



------------------------19------------------------
LECTURE: Taking Decisions: if / else Statements


let country = "Slovakia";
const continent = "Europe";
let population = 5;
let isIsLand = true;
let language = "Slovak";

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  let x = 33 - population;
  console.log(`${country}'s population is ${x} million below average.`);
}



------------------coding-challenge-2------------------



const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  x = markBMI - johnBMI;
  console.log(`Mark's BMI is ${x} higher than John's.`);
} else {
  x = johnBMI - markBMI;
  console.log(`John's BMI is ${x} higher than Mark's.`);
}

22 LECTURE: Equality Operators: == vs. ===

let numNeighbours = Number(
  Number(`How many neighbouring countries, does your country have?`)
);

if (numNeighbours == 1) {
  console.log(`Only 1 border.`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border.`);
} else {
  console.log(`No neighbours.`);
}


23 LECTURE: Logical Operators



let country = "Slovakia";
const continent = "Europe";
let population = 5;
let isIsland = false;
let language = "Slovak";

let x = 0;

if (language == "English") {
  x = x + 1;
}

if (population < "50") {
  x = x + 1;
}

if (isIsland == false) {
  x = x + 1;
}

if (x == 3) {
  console.log("Bingo.");
} else {
  console.log(`Not ${country}`);
}



let country = "Slovakia";
const continent = "Europe";
let population = 5;
let isIsland = false;
let language = "Slovak";

if (language == "English" && population < 50 && isIsland == false) {
  console.log(`${country} is the right one.`);
} else console.log(`${country} is not the right one.`);

coding challenge 3

firstDolphin = Number(prompt(`Please enter Dolphin's 1st score.`));
secondDolphin = Number(prompt(`Please enter Dolphin's 2nd score.`));
thirdDolphin = Number(prompt(`Please enter Dolphin's 3rd score.`));

firstKoala = Number(prompt(`Please enter Koala's 1st score.`));
secondKoala = Number(prompt(`Please enter Koalan's 2nd score.`));
thirdKoala = Number(prompt(`Please enter Koala's 3rd score.`));

avgDolphin = (firstDolphin + secondDolphin + thirdDolphin) / 3;

avgKoala = (firstKoala + secondKoala + thirdKoala) / 3;

if (avgDolphin > avgKoala && avgDolphin > 99) {
  console.log(`Dolphin won.`);
} else if (avgDolphin < avgKoala && avgKoala > 99) {
  console.log(`Koala won.`);
} else if (avgDolphin == avgKoala && avgDolphin > 99 && avgKoala > 99) {
  console.log(`There was a draw.`);
} else {
  console.log(`There was no winner.`);
}



const language = prompt(`What language do you speak?`);

switch (language) {
  case "chinese":
    console.log(`Most amount of native speakers.`);
    break;
  case "spanish":
    console.log(`Second most amount of native speakers.`);
    break;
  case "hindi":
    console.log(`Number 4.`);
    break;
  case "arabic":
    console.log(`5th most spoken.`);
    break;
  default:
    console.log(`Great language too.`);
}



////////////////// ternary operator ///////////////

let country = "Slovakia";
const continent = "Europe";
let population = 5;
let isIsland = false;
let language = "Slovak";

console.log(
  `${country}'s population is ${
    population > 33 ? "above average." : "below average."
  }`
);



////////////////// ternary operator 2 ///////////////


let flat = Number(prompt(`What's the original amount?`));

let tip = 0;

50 < flat < 300 ? (tip = 0.15 * flat) : (tip = 0.2 * flat);

console.log(`The total bill is equal to ${flat + tip}.`);



"use strict";

function describeCountry(country, population, capitalCity) {
  country = prompt(`Name of country?`);
  population = Number(prompt(`Population in millions?`));
  capitalCity = prompt(`Capital of the country?`);
  let stringOutput = `${country} has ${population} million of people, and its capital is ${capitalCity}.`;
  console.log(stringOutput);
}

describeCountry();




function percentageOfWorld(population) {
  population = Number(prompt`Please input the number of people in millions.`);
  console.log(
    `This population compiles ${(population / 7900) * 100}% of the world.`
  );
}


percentageOfWorld();


let percentageOfWorld = function (population) {
  population = Number(prompt(`Please input the number of people in millions.`));
  console.log(
    `This population compiles ${(population / 7900) * 100}% of the world.`
  );
};

percentageOfWorld();



let percentageOfWorld = (population) => {
  population = Number(prompt(`Please input the number of people in millions.`));
  console.log(
    `This population compiles ${(population / 7900) * 100}% of the world.`
  );
};

percentageOfWorld();



function inputNumber(population) {
  population = Number(prompt`Please input the number of people in millions.`);
  return population;
}

function percentageOfWorld(population, percent) {
  population = inputNumber();
  percent = (population / 7900) * 100;
  return percent;
}

function describePopulation(population, percent) {
  let country = prompt(`What's your country?`);
  percent = percentageOfWorld();
  console.log(
    `${country} has ${population} million people, and makes up ${percent}% of the world.`
  );
}

describePopulation();



let calcAverage = (name) => {
  score1 = Number(prompt(`What's the first score for ${name}?`));
  score2 = Number(prompt(`What's the second score ${name}?`));
  score3 = Number(prompt(`What's the third score ${name}?`));
  average = (score1 + score2 + score3) / 3;
  return average;
};

avgDolphin = calcAverage("Dolphin");
avgKoala = calcAverage("Koala");

console.log(
  `Dolphin has scored ${avgDolphin} and Koala has scored ${avgKoala}.`
);

function checkWinner() {
  if (avgDolphin > 2 * avgKoala) {
    console.log(`Dolphin wins.`);
  } else if (2 * avgDolphin < avgKoala) {
    console.log(`Koala wins.`);
  } else {
    console.log(`There is no winner.`);
  }
}

checkWinner();

//////////function expression////////////



let percentageOfWorld = function () {
  let population = Number(
    prompt(`Please input the number of people in millions.`)
  );
  console.log(
    `This population compiles ${(population / 7900) * 100}% of the world.`
  );
};

percentageOfWorld();



let populations = [5, 7, 8, 12];
if (populations.length == 4) {
  console.log(`true`);
} else {
  console.log(`false`);
}


function percentages(order) {
  let count = Number(
    prompt(`How many millions of people live in the ${order} country?`)
  );
  let percentage = (count / 7900) * 100;
  return percentage;
}

let v1 = percentages("first");
let v2 = percentages("second");
let v3 = percentages("third");
let v4 = percentages("fourth");
percentages = [v1, v2, v3, v4];

console.log(percentages);


const friends = ["Michael", "Steven", "Peter"];

//add elements
const newFreinds = friends.push("Jay"); //adds at the end
friends.unshift("John"); //adds at the begginning

//remove elements
friends.pop(); // removes last
const poppedFriends = friends.pop();
friends.shift(); // remove first

console.log(friends.indexOf("Steven")); // tells position of element
console.log(friends.includes("Steven")); // checks for element


const neighbours = ["Ukraine", "Poland", "Czechia", "Hungary"];
neighbours.push("Utopia");
neighbours.pop();

if (neighbours.includes("Germany")) {
  console.log("Probably not Germany.");
}

index = neighbours.indexOf("Hungary");
neighbours.splice(index, 1, "Republic of Hungary");

console.log(neighbours);



function calcTip(flat) {
  let tip = 0;
  if (50 < flat < 300) {
    tip = 0.15;
  } else {
    tip = 0.2;
  }
  let total = flat + flat * tip;
  return total;
}

const bills = [125, 555, 44];

const withTips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(withTips);



const jonas = {
  //defining object
  firstName: "Jonas",
  age: 2037 - 1991,
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas); //prints out whole object
console.log(jonas.lastName); //prints out lastName value

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, age, and friends."
);
console.log(jonas[interestedIn]); //outputs key-value specified by the user

if (jonas[interestedIn]) {
  //checks for input key-value
  console.log(jonas[interestedIn]);
} else {
  //if it's not there, outputs error
  console.log(`Wrong result.`);
}

jonas.location = "Portugal"; //adding to object
jonas["twitter"] = "@twitterhandle";



console.log(`${jonas[]} has 3 friends, and his best friend is Michael.`)



const jonas = {
  //defining object
  firstName: "Jonas",
  age: 2037 - 1991,
  friends: ["Michael", "Peter", "Steven"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.`
);

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: "6",
  neigbours: ["Norway", "Sweden", "Russia"],
}; //defining an object

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neigbours.length} neighbours, and a capital called ${myCountry.capital}.`
); //accessing key-value pairs in a template literal

myCountry.population = Number(myCountry.population) + 2; //increasing by two with dot notation


myCountry["population"] = Number(myCountry["population"]) - 2; //decreasing by two with bracket notation



const jonas = {
  //defining object
  firstName: "Jonas",
  birthYear: 1991,
  friends: ["Michael", "Peter", "Steven"],

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    // this. is equal to the object calling the function, ex. jonas
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);



const jonas = {
  //defining object
  firstName: "Jonas",
  birthYear: 1991,
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
};

if ((jonas.hasDriversLicense = true)) {
  holder = "a";
} else {
  holder = "no";
}

console.log(
  `${jonas.firstName} is a ${
    2037 - jonas.birthYear
  }-year old teacher, and he has ${holder} driver's license.`
);

console.log(`${holder}`);



const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: "6",
  neighbours: ["Norway", "Sweden", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbours, and a capital called ${this.capital}.`
    );
  },
  checkIsLand: function () {
    console.log(myCountry.neighbours.length > 0 ? true : false);
  },
};

myCountry.describe();
myCountry.checkIsLand();



const markObj = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    let BMI = this.weight / this.height ** 2;
    return BMI;
  },
};

const johnObj = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    let BMI = this.weight / this.height ** 2;
    return BMI;
  },
};

console.log(markObj.calcBMI());
console.log(johnObj.calcBMI());

if (markObj.calcBMI() > johnObj.calcBMI()) {
  console.log(`${markObj.firstName}'s BMI is higher than ${johnObj.firstName}`);
} else {
  console.log(`Other way around...`);
}



console.log("Lifting weights repetition 1.");
console.log("Lifting weights repetition 2.");
console.log("Lifting weights repetition 3.");
console.log("Lifting weights repetition 4.");

// for loop keeps running while condition is true
for (let rep = 1; rep <= 4; rep = rep + 1) {
  console.log(`Lifting weights repitition ${rep}.`);
}


for (let rep = 1; rep <= 50; rep = rep + 1) {
  console.log(`Voter number ${rep} is currently voting.`);
}




const jonas = ["Jonas", "Schmedtmann", ["Michael", "Peter", "Steven"]];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
}




//populating an array with types of another
const types = [];
const jonas = ["Jonas", "Schmedtmann", ["Michael", "Peter", "Steven"]];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);

  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);



const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);



const jonas = ["Jonas", "Schmedtmann", 5, true, "teacher"];

console.log(`Only strings.`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] != "string") {
    continue;
  }
  console.log(jonas[i], typeof jonas[i]);
}

const jonas = ["Jonas", "Schmedtmann", 5, true, "teacher"];

console.log(`Only strings.`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "number") {
    break;
  }
  console.log(jonas[i], typeof jonas[i]);
}




const populations = [5, 7, 9, 12];
const percentages = [];

for (let i = 1; i <= populations.length; i++) {
  percentages.push(percentageOfWorld(i));
}

function percentageOfWorld(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}
console.log(percentages);


//looping backwards over an array
const jonas = ["Jonas", "Schmedtmann", 5, true, "teacher"];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}



//loop inside a loop
for (let i = 1; i < 4; i++) {
  console.log(`Doing exercise ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`Lifting weight repetiton ${j}`);
  }
}



//array of arrays, printing out elements of
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  for (let j = 0; j <= listOfNeighbours[i].length - 1; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}



//while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}



// rolling until 6
let dice;

while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}.`);
}


const populations = [5, 7, 9, 12];
const percentages = [];

// for (let i = 1; i <= populations.length; i++) {
//   percentages.push(percentageOfWorld(i));
// }

//while loop 2
let i = 1;
while (i <= populations.length) {
  percentages.push(percentageOfWorld(i));
  i++;
}

function percentageOfWorld(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}
console.log(percentages);



bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTotal(flat) {
  let tip = 0;
  if (50 < flat < 300) {
    tip = 0.15;
  } else {
    tip = 0.2;
  }
  let total = flat + flat * tip;
  return total;
}

function calcTip(flat) {
  let tip = 0;
  if (50 < flat < 300) {
    tip = 0.15;
  } else {
    tip = 0.2;
  }
  tip = tip * flat;
  return tip;
}

tips = [];
totals = [];
for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i])); //calls function on each element
}

for (let j = 0; j <= bills.length - 1; j++) {
  totals.push(calcTotal(bills[j])); //calls function on each element
}

console.log(tips);
console.log(totals);

//calculaitng the average of an array
const arr = [0, 2, 4, 5, 8];
let total = 0;

function calcAverage() {
  for (let i = 0; i <= arr.length - 1; i++) {
    total = total + arr[i];
  }
  total = total / arr.length;
  return total;
}

console.log(calcAverage());



//                  CALCULATING AMPLTITUDES

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let temperaturesFixed = [];

//removing "error"
for (let i = 0; i <= temperatures.length - 1; i++) {
  if (typeof temperatures[i] != "string") {
    temperaturesFixed.push(temperatures[i]);
  }
}

console.log(temperaturesFixed);

//finding max value of an array
let max = temperaturesFixed[0];
for (let i = 0; i <= temperaturesFixed.length - 1; i++) {
  if (temperaturesFixed[i] > max) {
    max = temperaturesFixed[i];
  }
}

//finding min value of an array
let min = temperaturesFixed[0];
for (let i = 0; i <= temperaturesFixed.length - 1; i++) {
  if (temperaturesFixed[i] < min) {
    min = temperaturesFixed[i];
  }
}

console.log(max);
console.log(min);

let amplitude = max - min;
console.log(amplitude);




const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temperaturesTwo = [8, -4, -2, -2, "error", 11, 13, 15, 11, 10, 1, 3];

const temperaturesTotal = [];

let max = temperatures[0];
let min = temperatures[0];

for (let i = 0; i <= temperatures.length - 1; i++) {
  if (typeof temperatures[i] == "string") {
    continue;
  }
  if (temperatures[i] > max) {
    max = temperatures[i];
  }
  if (temperatures[i] < min) {
    min = temperatures[i];
  }
}

console.log(temperatures);
console.log(max);
console.log(min);

let amplitude = max - min;
console.log(amplitude);



const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temperaturesTwo = [8, -4, -2, -2, "error", 11, 13, 15, 11, 10, 1, 3];

const temperaturesTotal = [];

let max = temperatures[0];
let min = temperatures[0];

for (let i = 0; i <= temperatures.length - 1; i++) {
  if (typeof temperatures[i] == "string") {
    continue;
  }
  temperaturesTotal.push(temperatures[i]);
  temperaturesTotal.push(temperaturesTwo[i]);
}

for (let i = 0; i <= temperaturesTotal.length - 1; i++) {
  if (typeof temperaturesTotal[i] == "string") {
    continue;
  }
  if (temperaturesTotal[i] > max) {
    max = temperaturesTotal[i];
  }
  if (temperaturesTotal[i] < min) {
    min = temperaturesTotal[i];
  }
}

console.log(temperaturesTotal);
console.log(max);
console.log(min);

let amplitude = max - min;
console.log(amplitude);



const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    value: Number(prompt(`Degrees celsius:`)),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


//comparative operator in a template literal, arrays
const forecast = [17, 21, 23, 71, 18];
let sentence = ``;

for (let i = 0; i <= forecast.length - 1; i++) {
  sentence = sentence + `${forecast[i]}C in ${i + 1} day${i == 0 ? `` : `s`}. `;
}

console.log(sentence);



//

let x = "717";
let boo = true;
arrayX = x.split("");
console.log(arrayX);

for (let i = 0; i <= arrayX.length - 1; i++) {
  let j = arrayX.length - 1 - i;
  if (arrayX[i] !== arrayX[j]) {
    boo = false;
  }
}

console.log(boo);

UNFINNISHED:

let strs = ["flower", "flow", "flight"];
let strs2 = [];
let hold = ``;

for (let i = 0; i <= strs.length - 1; i++) {
  strs2.push(strs[i].split(""));
}
for (let i = 0; i <= strs.length - 1; i++) {
  if (strs2[0][i] == strs2[1][0] || strs2[0][i] == strs2[2][0]) {
    hold = hold + `${strs2[0][i]}`;
  }
}

for (let i = 0; i <= strs.length - 1; i++) {
  if ((strs2[0][i + 1] == strs2[1][1]) || strs2[0][i+1] == strs2[2][1]) {
    hold = hold + `${strs2[0][1]}`;
  }
}

for (let i = 0; i <= strs.length - 1; i++) {
  if ((strs2[0][i + 2] == strs2[1][2]) || strs2[0][i] == strs2[2][0]) {
    hold = hold + `${strs2[0][2]}`;
  }
}

for (let i = 0; i <= strs.length - 1; i++) {
  if ((strs2[0][i + 3] == strs2[1][3]) || strs2[0][i] == strs2[2][0]){
    hold = hold + `${strs2[0][3]}`;
  }
}

console.log(strs2);
console.log(hold);
console.log(strs2[1][0]);


const nums = [0, 1, 2, 2, 3, 0, 4, 2, 8, 8, 2];
const val = 2;

for (let i = 0; i <= nums.length - 1; i++) {
  if (nums[i] == val) {
    nums[i] = "-";
  }
}

nums.sort();
console.log(nums);

let counter = 0;

for (let i = 0; i <= nums.length - 1; i++) {
  if (typeof nums[i] == "number") {
    counter++;
  }
}

console.log(nums.splice(nums.length - counter, nums.length - 1));


nums = [1, 3, 5, 6];
target = 87;

if (nums.includes(target)) {
  console.log(nums.indexOf(target));
} else {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > target) {
      nums.splice(i, 0, target);
      break;
    } else {
      nums.push(target);
      break;
    }
  }
}

console.log(nums);



s = "Luffy is still a rascal.";
const arrayS = s.split("");
let position = 0;
console.log(arrayS);

for (let i = 0; i <= arrayS.length - 1; i++) {
  if (arrayS[i] == " ") {
    position = i;
  }
}

console.log(position);

const finalArray = arrayS.slice(position + 1, arrayS.length - 1);
const finalWord = finalArray.join("");
console.log(`The final word is ${finalWord} of length ${finalArray.length}`);

*/

digits = [1, 2, 9];
let holder = digits[digits.length - 1];
let lastDigit = holder + 1;
digits.splice(digits.length - 1, 1, lastDigit);

let lastArr = [];

if (lastDigit > 9) {
  lastString = lastDigit.toString();
  lastArr = lastString.split("");

  digits[digits.length - 1] = Number(lastArr[0]);
  digits[digits.length] = Number(lastArr[1]);
  console.log(digits);
} else {
  console.log(digits);
}
