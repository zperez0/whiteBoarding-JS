// Question #2: Array Deduping

// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.
// Example

// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// notes:
  // create an empty array
  // for loop? search for duplicates
  // remove duplicates and push into new array?

// --- without filter ---

  // -- for loop / indexOf --
  // indexOf() searches the array, if returns -1 it is removed

arrayDedupling = (input) => {
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    if (newArray.indexOf(input[i]) === -1) {
      console.log(`${input[i]}`);
      newArray.push(input[i]);
    }
  }
  return newArray;
};

// console.log(arrayDedupling([7, 9, "hi", 12, "hi", 7, 53]));

// --- foreach ---

arrayDedupling = (input) => {
  let newArray = [];
  input.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// console.log(arrayDedupling([7, 9, "hi", 12, "hi", 7, 53]));

// --- with filter ---

// filter() creates a new array filled w/ elements that pass a test // if element === index
// does not alter the orginal array

arrayDedupling = (input) => {
  return input.filter((element, index) => input.indexOf(element) === index);
};

// console.log(arrayDedupling([7, 9, "hi", 12, "hi", 7, 53]));

// --- recursive function ---

  // return input to prevent infinite loop?
  // use filter()

arrayDeduplingRecursive = (input) => {
  if (input < input.length) {
    return input;
  } else {
    console.log(`${input}`);
    return arrayDedupling(
      input.filter((element, index) => input.indexOf(element) === index)
    );
  }
};

console.log(arrayDeduplingRecursive([7, 9, "hi", 12, "hi", 7, 53]));

// first attempt
// arrayDedupling = (input) => {
//   for (let i=0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; i++)
//       if (input[i] === input[j]) {
//         // let inputJ = input[j];
//         let result = input.splice(j,6);
//         console.log(`inputi: ${input[i]}`);
//         console.log(`inputj: ${input[j]}`);
//         console.log(`${result}`);
//         return result;

//       }
//   }
// }
