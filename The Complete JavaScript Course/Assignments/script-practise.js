
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
