// Question #3: Compressing Strings

// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.
// Example

// Input: "aaabccdddda"

// Output: "3ab2c4da"

// notes:

  // split string into an array -> so one can easily iterate over the string
  // current count for the current letter
  // while loop -> when conditions are met ( ) , will increase count & index position. will only move to the next letter when the condition is met.
  // concat chars & count to empty str (results)

compressString = (str) => {
  let results = "";
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    let count = 1;
    let currentChar = strArray[i];
    while (i < strArray.length - 1 && strArray[i] === strArray[i + 1]) {
      count++ && i++;
    }
    if (count === 1) {
      results += currentChar;
    } else {
      results += currentChar + count;
    }
  }
  return results;
};

// console.log(compressString("aaabccdddda"));


// --- recursive function ---
  // WIP

// compressString = (str) => {
//   let results = "";
//   let strArray = str.split("");
//   if( str > strArray.length){
//     return str;
//   } else {

// };


//first attempt

// for loop -> iterate over the string
// compare each character
// if both characters are the same -> increment the count by 1 & concat string
// use regex?

// WIP -> creates infinite loop -__-

// compressString = (str) => {
//   let count = 0;
//     for (let i=0; i < str.length; i++) {
//       count++ && i++;
//       if (str[i] != str[i+1]) {
//         str += str[i] + count;
//         console.log(`str: ${str}`);
//       }
//     }
// }

// console.log(compressString("aaabccdddda"));