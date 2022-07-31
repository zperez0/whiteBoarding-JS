// Question #5: Array Sorting

// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

//     Quick sort
//     Merge sort
//     Heap sort
//     Insertion sort
//     Bubble sort
//     Selection sort

// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().
// Example

// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// notes:

//  --- bubble sort ---
  // for loop checks each element in the array
  // compares the elements
  // if arr[i-1] is less than arr[i] -> return false & swap each element in order

sortArray = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      false;
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
      console.log(`temp: ${temp}`);
    }
  }
  return arr;
};

// console.log(sortArray([9, 2, 7, 12]));



// --- recursive function ---

  // WIP -> foreach not working

sortArrayRecursive = (arr, e) => {
  if (e === 1) {
    return;
  }
  sortArrayRecursive(arr.forEach(arr));
  {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};

console.log(sortArrayRecursive([9, 2, 7, 12]));
