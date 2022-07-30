// Question #1: Turning Strings to URLs

// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.
// Example

// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// notes:
  //  for loop to interate through the string, look for spaces
  // need to replace spaces with %
  //  push into empty array??
  //  how to replace empty spaces with %??

// answer:
  // use split() to grab the spaces, join() to replace spaces w/ %

replaceSpace = (string) => {
  let result = string.split(" ").join("%"); // replaces spaces with %
  return result;
};

// console.log(replaceSpace("Jasmine Ann Jones"));

// --- recursive function ---
  // WIP
  // getting the correct answer however, can't figure out termination case.
  // creates infinite loop
replaceSpaceRecursive = (string) => {
  if (string < string.length) {
    return string;
  } else {
    let result = string.split(" ").join("%");
    console.log(`${result}`);
    return replaceSpaceRecursive(result);
  }
};

console.log(replaceSpaceRecursive("Jasmine Ann Jones"));
