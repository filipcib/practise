//             35. Search Insert Position

// Easy
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

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

//             35. Search Insert Position

// Easy
// Given a string s consisting of words and spaces, return the length of the last word in the string.

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

//                 66. Plus one

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

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
