//                  Template Literals

console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}.`
);
//prints out text with arguments mixed in

//                  If Statements


if (population > 33) {
  console.log(`${country}'s population is above average.`);
}
// if condition is met, do something

else if (population == 33) {
  console.log(`${country}'s population is above average.`);
}
// if other condition is met, do something else

else {
  console.log(`${country}'s population is below average.`);
}
// otherwise, do something else

//                  User Prompts
score = Number(prompt(`Please enter team's score.`));
//Number() function turns argument into a string
//prompt() function shows a window for input

//                  Logical Operators
x == 5; //equal to
x === 5; //equal to with value AND type
x != 5; //not equal to
x !== 5; //not equal to with value OR type

x > 5; //greater than
x < 5; //less than
x >= 5; //greater than, OR equal to
x >= 5; //greater than, OR equal to

x < 10 && y > 1; //true if first AND second condition is true
x < 10 || y > 1; //true if first OR second condition is true
!(x == y); //true if expression is false

//           Conditional ( Ternary ) Operators
let voteable = age < 18 ? "Too young" : "Old enough";

//                   Switch Statement


switch (language) {
  case "chinese":
    console.log(`Most amount of native speakers.`);
    break;
  case "spanish":
    console.log(`Second most amount of native speakers.`);
    break;
  default:
    console.log(`Great language too.`);
}
//selects one of the code blocks to be executed

//                  Function Declaration

function myFunction() {
    return a * b;
}

//                   Function Expression

let myFunction = (a, b) { 
    return a * b;
}

//                   Arrow Function

let myFunction = (a, b) => a * b;


//                      Arrays

const cars = ["Saab", "Volvo", "BMW"];
//defining an array

cars[3] = "Audi"
//changing an array element

cars.push("Fiat")
//adding to the end of an array

cars.length //returns the length

friends.unshift("John"); //adds at the begginning

friends.pop(); // removes last

friends.shift(); // remove first

nums.splice(1, 0, 5); //at 2nd position, remove 0 items, add 5

friends.indexOf("Steven"); // returns position of element

friends.includes("Steven"); // checks for element

const arrayS = s.split("");// creates an array from a string 

//array of arrays, printing out elements of
const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];
console.log(listOfNeighbours[0][1])
//prins out 1st row, 2nd column

fruits.includes("Mango");//returns true if includes


//                      Objects

const jonas = {
    firstName: "Jonas",
    age: 2037 - 1991,
    friends: ["Michael", "Peter", "Steven"],
  },

//defining object

jonas[age]; //accesses value specified by key
  
const jonas = {
    firstName: "Jonas",
    age: 2037 - 1991,
    friends: ["Michael", "Peter", "Steven"],
    calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    // this. is equal to the object calling the function, ex. jonas
  },
};

//                      For Loop
console.log("Lifting weights repetition 1.");
console.log("Lifting weights repetition 2.");
console.log("Lifting weights repetition 3.");
console.log("Lifting weights repetition 4.");

for (let rep = 1; rep <= 4; rep = rep + 1) {
  console.log(`Lifting weights repitition ${rep}.`);
}
// for loop keeps running while condition is true

continue;//skips current iteration
break;//exists the loop

//loop inside a loop
for (let i = 1; i < 4; i++) {
    console.log(`Doing exercise ${i}`);
    for (let j = 1; j <= 3; j++) {
      console.log(`Lifting weight repetiton ${j}`);
    }
}

 

//                 Other Function

let dice = Math.trunc(Math.random() * 6) + 1;
//Math.trunc removes any fractional part      
//Math.random creates a random number 0-1

stuff = 10;
stuff.toString().length;
//returns length of integer

Number();//converts value to a number



//                 While Loop

let i = 1;
while (i <= populations.length) {
  percentages.push(percentageOfWorld(i));
  i++;
}
//runs while condition is true

