// Question #4: Checking for Uniqueness

// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.
// Example

// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

// notes:
  // find unique element from a str
  // return true or false
  // 2 for loops
  // compare each character -> if characters match return false, if not return true

uniqueChar = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(uniqueChar("hello")); // false
console.log(uniqueChar("copyright")); // true

// --- recursive function ---

  // WIP

uniqueCharRecursive = (str, i) => {
  if (str.length - i === 0) {
    return;
  } else {
    return (
      uniqueCharRecursive(str, i + 1) || str.substring(0, i).indexOf(str[i]) != -1
    );
  }
};

// console.log(uniqueCharRecursive("hello")); // false
// console.log(uniqueCharRecursive("copyright")); // true
